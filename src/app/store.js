import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';

import taskReducer from '../features/todo/taskSlice'

// export const store = configureStore({
//   reducer: {
//     counter: counterReducer,
//   },

export const store = configureStore({
  reducer: {
    task: taskReducer,
  },
});
