import Task from './Task'
// import tasks from '../data/tasks'
import { useSelector } from 'react-redux';
import { selectTask, selectFilter } from '../features/todo/taskSlice';
import {filters} from '../features/todo/taskSlice';

function TaskContainer () {
const tasks = useSelector(selectTask)
const filter = useSelector(selectFilter)
const taskList = filters[filter]

    
return (
        <section className="tasks-container">
            {tasks.map(task => (
                <Task 
                key = {task.id}
                task = {task}
                />                
            ))}
            </section>
            )
}

export default TaskContainer