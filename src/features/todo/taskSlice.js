import { createSlice } from '@reduxjs/toolkit';

import { nanoid } from 'nanoid';



const initialState = {
    value: JSON.parse(localStorage.getItem('tasks')) || [],
    status: 'nothing',
  }
console.log(initialState.value)
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
    }
        

  }

  
})

export const {addNewTask, deleteTask, toggleTask} = taskSlice.actions 

export const selectTask = (state) => state.task.value;

export default taskSlice.reducer 