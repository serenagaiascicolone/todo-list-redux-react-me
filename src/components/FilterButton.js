import { useDispatch, useSelector } from 'react-redux';
import { filterTask, selectFilter } from "../features/todo/taskSlice"


function FilterButton ({name}) {
const dispatch = useDispatch()
const filter = useSelector(selectFilter)
    return (

        <button
         className = {name === filter ? "active": "btn"}
         onClick={() => dispatch (filterTask(name))}
        > {name}</button>
         
 )
}

export default FilterButton