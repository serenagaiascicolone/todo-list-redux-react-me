import FilterButtonList from "./FilterButtonList"

function Form () {
    return (
        <>
        
        

     <section className="add-and-filter-tasks">
     <div className="add-task">
     <input type="text" />
     <button>Aggiungi</button>
     </div>
     <FilterButtonList />
     </section>
        </>
    )
}

export default Form 