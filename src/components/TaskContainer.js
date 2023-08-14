import Task from './Task'
// import tasks from '../data/tasks'
import { useSelector } from 'react-redux';
import { selectTask, selectedFilter } from '../features/todo/taskSlice';

import TaskCounter from './TaskCounter';


function TaskContainer () {
const tasks = useSelector(selectTask)
const filters = useSelector(selectedFilter)
const taskList = tasks.filter(filters)

    
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