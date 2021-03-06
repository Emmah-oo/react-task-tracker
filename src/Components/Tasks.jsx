import Task from "./Task";

const Tasks = ({ tasks, deleteTask, taskComplete }) => {
  return (
    <div className="tasks">
        {tasks.length > 0 ? <p>Remaining Task (<span className="span">{tasks.length}</span>)</p>
        : <p>No Task Added</p>}
      {tasks.map((task) => (
        <Task 
        key={task.id} 
        task={task} 
        deleteTask={deleteTask}
        taskComplete={taskComplete}
        />
      ))}
    </div>
  );
};

export default Tasks;
