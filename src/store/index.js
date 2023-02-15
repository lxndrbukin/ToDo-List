import { configureStore } from '@reduxjs/toolkit';
import {
  tasksReducer,
  createTask,
  deleteTask,
  editTask,
  completeTask,
} from './slices/tasksSlice';
import { formReducer, setTask } from './slices/formSlice';

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    form: formReducer,
  },
});

export { store, createTask, deleteTask, editTask, completeTask, setTask };
