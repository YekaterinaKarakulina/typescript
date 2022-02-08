import Link from "next/link";
import React from "react";
import { Task } from "../generated/graphql-frontend";
import TaskListItem from "./TaslListItem";

interface Props {
  tasks: Task[];
}

const TaskList: React.FC<Props> = ({ tasks }) => (
  <ul className="task-list">
    {tasks.map((task) => (
      <TaskListItem key={task.id} task={task} />
    ))}
  </ul>
);

export default TaskList;
