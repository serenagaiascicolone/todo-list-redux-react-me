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
        <div className="empty-list"> 
            
            <h3> Nessun task in questa lista </h3>

        </div>
    )
}
}

export default TaskCounter 