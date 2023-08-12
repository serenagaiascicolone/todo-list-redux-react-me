import { useSelector } from 'react-redux';
import { selectTask } from '../features/todo/taskSlice';


function TaskCounter (){
const tasks = useSelector(selectTask)
    return (
        <section className="counter-container">
        <h4> <span>{tasks.length}</span> task in questa lista</h4>
    </section>
    )
}

export default TaskCounter 