import { createSlice } from '@reduxjs/toolkit';

import { nanoid } from 'nanoid';



const initialState = {
    value: JSON.parse(localStorage.getItem('tasks')) || [],
    status: 'init',
    filter: 'Tutti'  
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
      state.value = [
          ...state.value, 
          {
            id: nanoid(),
            name: action.payload,
            completed: false,
          }
      ]
    },
    deleteTask: (state, action) => {
      state.status = 'delete';
      state.value = 
        state.value.filter(task => task.id !== action.payload);
      
    },
    toggleTask: (state, action) => {
      state.status = 'toggle task';
      state.value = 
      state.value.map(task => {
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
      state.value =
      state.value.map(task => {
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

export const selectTask = (state) => state.task.value;
export const selectFilter = (state) => state.task.filter;
export const selectedFilter = (state) => filters[state.task.filter] // filtro che seleziona i filtri in base alla relativa funzione che si trova dentro l'oggetto filters 

export default taskSlice.reducer 