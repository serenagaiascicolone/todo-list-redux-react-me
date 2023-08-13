import { useSelector } from 'react-redux';
import { selectTask } from '../features/todo/taskSlice';


function TaskCounter ({taskNumber}){
const tasks = useSelector(selectTask)
    
if(taskNumber > 0){

    return (
            
            <section className="counter-container">
            <h4> <span>{taskNumber}</span> task in questa lista</h4>
        </section>
        )
} else {
    return (
        <h3> Nessun task in questa lista </h3>
    )
}
}

export default TaskCounter 