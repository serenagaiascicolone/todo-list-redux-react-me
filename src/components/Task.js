



function Task ({task}) {

    return (
        <article className="task-container">
        <input type="checkbox" />
            <button className="close-button"> X </button>
        <span> {task.name}</span>
        <div className="buttons-container">
            <button>Modifica</button>
        </div>
    </article>  
    )
}

export default Task