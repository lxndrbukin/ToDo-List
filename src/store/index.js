import { configureStore, createSlice } from '@reduxjs/toolkit';

const tasksSlice = createSlice({
  name: 'task',
  initialState: [],
  reducers: {
    createTask(state, action) {
      state.push(action.payload);
    },
    removeTask(state, action) {
      const index = state.indexOf(action.payload);
      state.splice(index, 1);
    },
  },
});

const store = configureStore({
  reducer: {
    tasks: tasksSlice.reducer,
  },
});

export { store };
export const { createTask, removeTask } = tasksSlice.actions;
