import { useDispatch } from 'react-redux';
import { deleteTask, toggleTask } from "../features/todo/taskSlice";

function Task ({task}) {
const dispatch = useDispatch();
    return (
        <article className="task-container">
        <input type="checkbox" checked={task.completed}  onChange={()=> dispatch(toggleTask(task.id))}/>
            <button className="close-button" onClick = {()=>dispatch(deleteTask(task.id))}> X </button>
        <span> {task.name}</span>
        <div className="buttons-container">
            <button>Modifica</button>
        </div>
    </article>  
    )
}

export default Task