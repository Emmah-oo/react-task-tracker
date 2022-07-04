const Task = ({ task, deleteTask, taskComplete }) => {

    return (
        <div className={`task ${task.done ? 'check' : 'task'}`} >
            <div className="task-name">
                <button className="task-done" onClick={() => taskComplete(task.id)}>
                    <>&#x2713;</>
                </button>
                <h3>{task.name}</h3>
            </div>
            <h4>{task.date}</h4>
            <button className="del" onClick={() => deleteTask(task.id)}>
                <>&#10060;</>
            </button>
        </div>
    )
}

export default Task;