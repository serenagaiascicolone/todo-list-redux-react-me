import { useState } from "react"
import { UseSelector, useDispatch }  from 'react-redux';
import { addNewTask } from "../features/todo/taskSlice";
import FilterButtonList from "./FilterButtonList"


function Form () {
    
const [newTask, setNewTask] = useState('')   
const dispatch = useDispatch();

function handleAdd (){
dispatch(addNewTask(newTask))
setNewTask('')
}


    return (
        <>
     <section className="add-and-filter-tasks">
     <div className="add-task">
     <input type="text" value={newTask} onChange ={(e) => setNewTask(e.target.value)}/>
     <button onClick={handleAdd}>Aggiungi</button>
     </div>
     <FilterButtonList />
     </section>
        </>
    )

}

export default Form 