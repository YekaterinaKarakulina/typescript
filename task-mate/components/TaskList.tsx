import React from "react";
import { Task } from "../generated/graphql-frontend";

interface Props {
  tasks: Task[];
}

const TaskList: React.FC<Props> = ({ tasks }) => (
  <ul className="task-list">
    {tasks.map((task) => (
      <li className="task-list-item" key={task.id}>
        {task.title} ({task.status})
      </li>
    ))}
  </ul>
);

export default TaskList;
