const Task = ({ task, deleteTask, taskComplete }) => {

    return (
        <div className={`task ${task.done ? 'check' : 'task'}`} >
            <div className="task-name">
                <button className="task-done" onClick={() => taskComplete(task.id)}>+</button>
                <h3>{task.name}</h3>
            </div>
            <h4>{task.date}</h4>
            <button className="del" onClick={() => deleteTask(task.id)}>X</button>
        </div>
    )
}

export default Task;