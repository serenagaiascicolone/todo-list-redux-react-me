import { useDispatch } from 'react-redux';
import { deleteTask, toggleTask } from "../features/todo/taskSlice";
import { AiFillCloseCircle } from "react-icons/ai";
import { CiCircleCheck } from "react-icons/ci";



function Task ({task}) {
const dispatch = useDispatch();
    return (
        <article className="task-container">
            <span onClick={()=> dispatch(toggleTask(task.id))}><CiCircleCheck className={`task-button toggle ${task.completed ? 'checked' : ''}`} style= {{borderRadius : "50%"}}/></span>
        {/* <input type="checkbox" checked={task.completed}  onChange={()=> dispatch(toggleTask(task.id))}/> */}
            <span onClick = {()=>dispatch(deleteTask(task.id))}> <AiFillCloseCircle className="task-button"  style= {{borderRadius : "50%"}} /> </span>
        <p className={task.completed ? 'completed' : ''}> {task.name}</p>
        <div className="buttons-container">
            <button>Modifica</button>
        </div>
    </article>  
    )
}

export default Task