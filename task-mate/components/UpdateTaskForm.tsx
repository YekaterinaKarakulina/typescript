import React, { useState } from "react";

interface Props {
  initialValues: Values;
}

interface Values {
  title: string;
}

const UpdateTaskForm: React.FC<Props> = ({ initialValues }) => {
  const [values, setValues] = useState<Values>(initialValues);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: e.target.value,
    }));
  };

  return (
    <form>
      <p>
        <label className="field-labe">Title</label>
        <input
          type="text"
          name="title"
          className="text-input"
          value={values.title}
          onChange={handleChange}
        />
      </p>
      <p>
        <button className="button" type="submit">
          Save
        </button>
      </p>
    </form>
  );
};

export default UpdateTaskForm;
