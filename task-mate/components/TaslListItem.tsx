import React, { useEffect } from "react";
import Link from "next/link";
import {
  Task,
  TaskStatus,
  useDeleteTaskMutation,
  useUpdateTaskMutation,
} from "../generated/graphql-frontend";
import { Reference } from "@apollo/client";

interface Props {
  task: Task;
}

const TaskListItem: React.FC<Props> = ({ task }) => {
  const [deleteTask, { loading, error }] = useDeleteTaskMutation({
    variables: { id: task.id },
    errorPolicy: "all",
    update: (cache, result) => {
      const deletedTask = result.data?.deleteTask;

      if (deletedTask) {
        cache.modify({
          fields: {
            tasks(taskRefs: Reference[], { readField }) {
              return taskRefs.filter((taskRef) => {
                return readField("id", taskRef) !== deletedTask.id;
              });
            },
          },
        });
      }
    },
  });

  const handelDelete = async () => {
    try {
      await deleteTask();
    } catch (error) {
      // Log the error
      console.log(error);
    }
  };

  const [updateTask, { loading: updateTaskLoading, error: updateTaskError }] =
    useUpdateTaskMutation({ errorPolicy: "all" });

  const handleStatusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newStatus = e.target.checked
      ? TaskStatus.Completed
      : TaskStatus.Active;
    updateTask({ variables: { input: { id: task.id, status: newStatus } } });
  };

  useEffect(() => {
    if (error || updateTaskError) {
      alert("An error occured, please try again");
    }
  }, [error, updateTaskError]);

  return (
    <li className="task-list-item">
      <label className="checkbox">
        <input
          type="checkbox"
          onChange={handleStatusChange}
          checked={task.status === TaskStatus.Completed}
          disabled={updateTaskLoading}
        />
        <span className="checkbox-mark">&#10003;</span>
      </label>
      <Link href="/update/[id]" as={`/update/${task.id}`}>
        <a className="task-list-item-title">{task.title}</a>
      </Link>
      <button
        className="task-list-item-delete"
        disabled={loading}
        onClick={handelDelete}
      >
        &times;
      </button>
    </li>
  );
};

export default TaskListItem;
