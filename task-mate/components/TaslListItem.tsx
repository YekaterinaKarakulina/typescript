import React, { useEffect } from "react";
import Link from "next/link";
import { Task, useDeleteTaskMutation } from "../generated/graphql-frontend";
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

  useEffect(() => {
    if (error) {
      alert("An error occured, please try again");
    }
  }, [error]);

  return (
    <li className="task-list-item">
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
