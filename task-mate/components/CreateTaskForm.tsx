import React, { useState } from "react";

const CreateTaskForm = () => {
  const [titile, setTitle] = useState("");

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  return (
    <form>
      <input
        type="text"
        name="title"
        placeholder="What wuld you like to get done?"
        autoComplete="off"
        className="text-input new-task-text-input"
        value={titile}
        onChange={handleTitleChange}
      />
    </form>
  );
};

export default CreateTaskForm;
