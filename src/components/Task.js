import { useDispatch } from 'react-redux';
import { deleteTask, toggleTask } from "../features/todo/taskSlice";
import { AiFillCloseCircle } from "react-icons/ai";
import { CiCircleCheck } from "react-icons/ci";
import { useState } from 'react';


function Task ({task}) {
const dispatch = useDispatch();
const [isEditing, setIsEditing] = useState(true)

let taskView = (
 
       <>
            <span onClick={()=> dispatch(toggleTask(task.id))}><CiCircleCheck className={`task-button toggle ${task.completed ? 'checked' : ''}`} style= {{borderRadius : "50%"}}/></span>
        {/* <input type="checkbox" checked={task.completed}  onChange={()=> dispatch(toggleTask(task.id))}/> */}
            <span onClick = {()=>dispatch(deleteTask(task.id))}> <AiFillCloseCircle className="task-button"  style= {{borderRadius : "50%"}} /> </span>
        <p className={task.completed ? 'completed' : ''}> {task.name}</p>
        <div className="buttons-container">
            <button>Modifica</button>
        </div>
       </>

    
    )

let taskEdit = (
    <form action="">
        <span onClick={()=> dispatch(toggleTask(task.id))}><CiCircleCheck className={`task-button toggle ${task.completed ? 'checked' : ''}`} style= {{borderRadius : "50%"}}/></span>
    
        <span onClick = {()=>dispatch(deleteTask(task.id))}> <AiFillCloseCircle className="task-button"  style= {{borderRadius : "50%"}} /> </span>
    {/* <p className={task.completed ? 'completed' : ''}> {task.name}</p> */}
        {/* <input type="text" /> */}
        <textarea name="" id="" cols="30" rows="10"></textarea>
        <div className="buttons-container">
            <button>Salva</button>
        </div>
    </form>
    )


    return (
        <article className="task-container">
            {isEditing ? taskEdit : taskView}
        </article>
    )
}

export default Task