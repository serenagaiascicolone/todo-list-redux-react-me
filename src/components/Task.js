import { useDispatch } from 'react-redux';
import { deleteTask, toggleTask, editingTask } from "../features/todo/taskSlice";
import { AiFillCloseCircle } from "react-icons/ai";
import { CiCircleCheck } from "react-icons/ci";
import { IoChevronBackCircleOutline } from "react-icons/io5";
import { useState, useRef, useEffect } from 'react';



function Task ({task}) {
const dispatch = useDispatch();

const [isEditing, setIsEditing] = useState(false)
const [newTaskName, setNewTaskName] = useState('')
const editInputRef = useRef(null)

function handleNewTaskName (e){
    setNewTaskName(e.target.value);
}


function handleSubmit(e){
    e.preventDefault();
    dispatch(editingTask([task.id, newTaskName]))
    setNewTaskName('');
    setIsEditing(false)
}

function handleEditing () {
    setNewTaskName('')
    setIsEditing(false)
}

useEffect(() => {
    if(isEditing) {
      editInputRef.current.focus();
    }
  }, [isEditing])


// JSX NO MODIFICA
let taskView = (
 
       <>
            {/* FLAG */}
            <span onClick={()=> dispatch(toggleTask(task.id))}><CiCircleCheck className={`task-button toggle ${task.completed ? 'checked' : ''}`} style= {{borderRadius : "50%"}}/></span>
            
            {/* CLOSE BOTTON: CANCELLA */}
            <span onClick = {()=>dispatch(deleteTask(task.id))}> <AiFillCloseCircle className="task-button"  style= {{borderRadius : "50%"}} /> </span>
        <p className={task.completed ? 'completed' : ''}> {task.name}</p>
        <div className="buttons-container">

            {/* MODIFICA */}
            <button onClick={()=> setIsEditing(true)}>Modifica</button>
        </div>
       </>

    
    )

// JSX MODIFCA
let taskEdit = (
    <form action="#" onSubmit={handleSubmit}>
        <span onClick={()=> dispatch(toggleTask(task.id))}><CiCircleCheck className={`task-button toggle ${task.completed ? 'checked' : ''}`} style= {{borderRadius : "50%"}}/></span>
    
        <span onClick = {handleEditing}> <IoChevronBackCircleOutline className="task-button"  style= {{borderRadius : "50%"}} /> </span>
    {/* <p className={task.completed ? 'completed' : ''}> {task.name}</p> */}

        <textarea name="" id="" cols="30" rows="10" 
        ref = {editInputRef}
        value={newTaskName}
        // value={task.name}
        onChange= {handleNewTaskName}  
        >{task.name}</textarea>

        <div className="buttons-container">
            <button type='submit'>Salva</button>
        </div>
    </form>
    )

// LOGICA CONDIZIONALE
    return (
        <article className="task-container">
            {isEditing ? taskEdit : taskView}
        </article>
    )
}

export default Task