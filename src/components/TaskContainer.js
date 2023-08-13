import Task from './Task'
// import tasks from '../data/tasks'
import { useSelector } from 'react-redux';
import { selectTask, selectFilter } from '../features/todo/taskSlice';
import {filters} from '../features/todo/taskSlice';

function TaskContainer () {
const tasks = useSelector(selectTask)
const filter = useSelector(selectFilter)
const selectedFilter = filters[filter]
const taskList = tasks.filter(selectedFilter)

    
return (
        <section className="tasks-container">
            {taskList.map(task => (
                <Task 
                key = {task.id}
                task = {task}
                />                
            ))}
            </section>
            )
}

export default TaskContainer