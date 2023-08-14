import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';



const initialState = {
    tasks: JSON.parse(localStorage.getItem('tasks')) || [],
    status: 'init',
    filter: 'Tutti' 
    // isEditing: false, 
  }
  
export const filters = {
    Tutti: () => true,
    Rimasti: task => !task.completed,
    Completati: task => task.completed,
  }
  console.log(filters[initialState.filter])

export const taskSlice = createSlice ({
  name: 'task',
  initialState,
  reducers: {
    addNewTask: (state, action) => {
      state.status = 'added';
      const newTask = 
      {
        id: nanoid(),
        name: action.payload,
        completed: false,
      }
      // state.tasks = [
      //     ...state.tasks, 
      //     {
      //       id: nanoid(),
      //       name: action.payload,
      //       completed: false,
      //     }
      // ]
      state.tasks.push(newTask)
    },
    deleteTask: (state, action) => {
      state.status = 'delete';
      state.tasks = 
        state.tasks.filter(task => task.id !== action.payload);
      
    },
    toggleTask: (state, action) => {
      state.status = 'toggle task';
      state.tasks = 
      state.tasks.map(task => {
        if(task.id === action.payload){
          return {
            ...task,
            completed: !task.completed
          }
        }
        return task;
      });
    },
    editingTask: (state, action) => {

      state.status = 'editing task';
      state.tasks =
      state.tasks.map(task => {
        if (task.id === action.payload[0]){
          return {
            ...task,
            name: action.payload[1]
          }
        }
        return task 
      })
    },
     filterTask: (state, action) => {
      state.status = 'filter task';
      state.filter = action.payload
     }    

  }

  
})

export const {addNewTask, deleteTask, toggleTask, editingTask, filterTask} = taskSlice.actions 

export const selectTask = (state) => state.task.tasks;
export const selectFilter = (state) => state.task.filter;
export const selectedFilter = (state) => filters[state.task.filter] // filtro che seleziona i filtri in base alla relativa funzione che si trova dentro l'oggetto filters 

export default taskSlice.reducer 