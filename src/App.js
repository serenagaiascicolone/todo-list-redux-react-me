import React from 'react';
import Mockup from './mockup/Mockup';
import { useEffect } from 'react';
import { Counter } from './features/counter/Counter';
import Form from './components/Form'
import './App.css';
import FilterButtonList from './components/FilterButtonList';
import TaskCounter from './components/TaskCounter';
import TaskContainer from './components/TaskContainer';
import { useSelector } from 'react-redux';
import { selectTask } from './features/todo/taskSlice';

import { nanoid } from 'nanoid';
function App() {
  const tasks = useSelector(selectTask)

  useEffect (() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
}, [tasks])

  return (
    <div className="App">
        {/* <Counter /> */}
           {/* <Mockup /> */}
          
           <header className="todo-list-header">
            <h1>Todo List </h1>
        </header>
        <main>
        <header className="tasks-title">
        <h3> I miei task</h3>
        </header>
          <Form />
   
          <TaskCounter />
          <TaskContainer />
          </main>
    </div>
  );
}

export default App;
