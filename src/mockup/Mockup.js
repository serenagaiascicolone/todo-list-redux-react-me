function Mockup (){
    return (
        <>
        <header className="todo-list-header">
            <h1>Todo List </h1>
        </header>
        <main>
            <header className="tasks-title">
               <h3> I miei task</h3>
            </header>

            <section className="add-and-filter-tasks">
            <div className="add-task">
            <input type="text" />
            <button>Aggiungi</button>
            </div>
            <div className="filter-container">
                <h4> filtra: </h4>
               
                    <button> Tutti </button>
                    <button>Rimasti</button>
                    <button>Completati</button>
                </div>
           
            </section>

            <section className="counter-container">
                <h4>1 task in questa lista</h4>
            </section>
            <section className="tasks-container">
                <article className="task-container">
                    <input type="checkbox" />
                        <button className="close-button"> X </button>
                    <span> Creare sito todo list, definire il css, html, javascript</span>
                    <div className="buttons-container">
                        <button>Modifica</button>
                    </div>
                </article>    
                <article className="task-container">
                    <input type="checkbox" />
                        <button className="close-button"> X </button>
                    <span> Creare sito todo list, definire il css, html, javascript</span>
                    <div className="buttons-container">
                        <button>Modifica</button>
                    </div>
                </article>    
                <article className="task-container">
                    <input type="checkbox" />
                        <button className="close-button"> X </button>
                    <span> Creare sito todo list, definire il css, html, javascript</span>
                    <div className="buttons-container">
                        <button>Modifica</button>
                    </div>
                </article>    
                <article className="task-container">
                    <input type="checkbox" />
                        <button className="close-button"> X </button>
                    <span> Creare sito todo list, definire il css, html, javascript</span>
                    <div className="buttons-container">
                        <button>Modifica</button>
                    </div>
                </article>    
                <article className="task-container">
                    <input type="checkbox" />
                        <button className="close-button"> X </button>
                    <span> Creare sito todo list, definire il css, html, javascript</span>
                    <div className="buttons-container">
                        <button>Modifica</button>
                    </div>
                </article>    
              
                       
            </section>
        </main>
        
        </>
    )
}

export default Mockup