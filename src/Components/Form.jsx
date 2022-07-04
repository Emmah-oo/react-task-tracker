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
    if (name.length > 0 && date.length > 0) {
      const id = Math.floor(Math.random()*100)
      const done = false
      setTasks((tasks) => [...tasks, { name, date, id, done }]);
      setName('')
      setDate('')
    } else {
      alert('Enter A Task')
    }
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
          type="date"
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
