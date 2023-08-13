import Task from './Task'
// import tasks from '../data/tasks'
import { useSelector } from 'react-redux';
import { selectTask } from '../features/todo/taskSlice';

function TaskContainer () {
const tasks = useSelector(selectTask)

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