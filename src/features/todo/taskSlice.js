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
      state.tasks.push(newTask) // possiamo fare push grazie a immer, libreria che crea una bozza di stato e la integra a quello già esistente 
    },
    deleteTask: (state, action) => {
      state.status = 'delete';
      state.tasks = 
        state.tasks.filter(task => task.id !== action.payload);
      
    },
    toggleTask: (state, action) => {
      state.status = 'toggle task';
      // state.tasks = 
      const task = state.tasks.find(task => task.id === action.payload)
      task.completed = !task.completed 
      // state.tasks.map(task => {
      //   if(task.id === action.payload){
      //     return {
      //       ...task,
      //       completed: !task.completed
      //     }
      //   }
      //   return task;
      // });
    },
    editingTask: (state, action) => {

      state.status = 'editing task';
      const task = state.tasks.find(task => task.id === action.payload.id);
      task.name = action.payload.name
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
export const selectedFilter = (state) => filters[state.task.filter] // selettore che prendo lo stato e restituisce la sua proprietà filter come parametro dell'oggetto filters che dentro ha delle funzioni: se la proprietà filter è uguale a tutti si attiverà la funzione tutti, e così via...

export default taskSlice.reducer 