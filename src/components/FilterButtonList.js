import FilterButton from './FilterButton';
import {filters} from '../features/todo/taskSlice'

function FilterButtonList () {
    const filterButtons = Object.keys(filters).map(name => ( 
        <FilterButton 
        key = {name}
        name = {name}
        />

        
        ))

    return (
        <div className="filter-container">
        <h4> filtra: </h4>
        {filterButtons}
       
        </div>
    )
}
export default FilterButtonList