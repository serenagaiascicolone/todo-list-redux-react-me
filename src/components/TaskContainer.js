import Task from './Task'
// import tasks from '../data/tasks'
import { useSelector } from 'react-redux';
import { selectTask, selectFilter } from '../features/todo/taskSlice';
import {filters} from '../features/todo/taskSlice';
import TaskCounter from './TaskCounter';


function TaskContainer () {
const tasks = useSelector(selectTask)
const filter = useSelector(selectFilter)
const selectedFilter = filters[filter] // prendo l'oggetto filters e seleziono solo la funzione il cui nome corrisponde alla variabile di stato (filter) che cambia in base al click dei filterbutton 
const taskList = tasks.filter(selectedFilter)

    
return (
    <>
    <TaskCounter taskNumber = {taskList.length}/>
<section className="tasks-container">
    {taskList.map(task => (
        <Task 
        key = {task.id}
        task = {task}
        />                
    ))}
    </section>
    </>
    )
}

export default TaskContainer