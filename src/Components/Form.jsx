import { useState } from "react";

const Form = ({ tasks, setTasks }) => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const getName = (e) => {
    setName(e.target.value);
  };

  const getDate = (e) => {
    setDate(e.target.value);
  };

  const updateTask = (e) => {
    e.preventDefault();
    setTasks((tasks) => [...tasks, { name, date }]);
    setName('')
    setDate('')
  };

  return (
    <div className="form">
      <form onSubmit={updateTask}>
        <input
          className="input"
          type="text"
          placeholder="Task Name"
          value={name}
          onChange={getName}
        />

        <input
          className="input"
          type="text"
          placeholder="Task Date"
          value={date}
          onChange={getDate}
        />
        <input className="submit" type="submit" />
      </form>
    </div>
  );
};

export default Form;
