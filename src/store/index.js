import { configureStore } from '@reduxjs/toolkit';
import { tasksReducer, editTask, completeTask } from './slices/tasksSlice';
import { formReducer, setTask } from './slices/formSlice';

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    form: formReducer,
  },
});

export { store, editTask, completeTask, setTask };
export * from './thunks/fetchActiveTasks';
export * from './thunks/createTask';
export * from './thunks/deleteTask';
