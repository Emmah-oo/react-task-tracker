import Task from "./Task";

const Tasks = ({ tasks }) => {
  return (
    <div className="tasks">
      <p>
        Remaining Task (<span className="span">{tasks.length}</span>)
      </p>
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};

export default Tasks;
