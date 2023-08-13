import React from 'react';
import Mockup from './mockup/Mockup';
import { useEffect } from 'react';

import Form from './components/Form'
import './App.css';
import FilterButtonList from './components/FilterButtonList';
import TaskCounter from './components/TaskCounter';
import TaskContainer from './components/TaskContainer';
import { useSelector } from 'react-redux';
import { selectTask } from './features/todo/taskSlice';
import { nanoid } from 'nanoid';
import { FaListCheck} from "react-icons/fa6";


function App() {
  const tasks = useSelector(selectTask)

  useEffect (() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
}, [tasks])

  return (
    <div className="App">
           {/* <Mockup /> */}
          
           <header className="todo-list-header">
            <h1>  Todo List </h1>
           {/* <FaListCheck  style={{fontSize : "2rem"}}/> */}
        </header>
        <main>
        <header className="tasks-title">
        <h3> I miei task</h3>
        </header>
          <Form />
          <TaskContainer />
          </main>
    </div>
  );
}

export default App;
