import { createSlice } from '@reduxjs/toolkit';
import tasks from '../../data/tasks'

const initialState = {
    // value: JSON.parse(localStorage.getItem('tasks')) || [],
    value: [],
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
            id: 4,
            name: action.payload,
            completed: false,
          }
      ]
    }
  }

  
})

export const {addNewTask} = taskSlice.actions 

export const selectTask = (state) => state.task.value;

export default taskSlice.reducer 