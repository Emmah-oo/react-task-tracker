const Task = ({ task }) => {
    return (
        <div className="task">
            <h3>{task.name}</h3>
            <h4>{task.date}</h4>
        </div>
    )
}

export default Task;