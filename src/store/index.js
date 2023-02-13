import { configureStore, createSlice } from '@reduxjs/toolkit';

const activeTasksSlice = createSlice({
  name: 'task',
  initialState: [],
  reducers: {
    createTask(state, action) {
      state.push(action.payload);
    },
    deleteTask(state, action) {
      const index = state.indexOf(action.payload);
      state.splice(index, 1);
    },
    editTask(state, action) {
      const index = state.indexOf(action.payload.original);
      state[index] = action.payload.updated;
    },
  },
});

const deletedTasksSlice = createSlice({
  name: 'deletedTask',
  initialState: [],
  reducers: {},
  extraReducers(builder) {
    builder.addCase(activeTasksSlice.actions.deleteTask, (state, action) => {
      state.push(action.payload);
    });
  },
});

const store = configureStore({
  reducer: {
    activeTasks: activeTasksSlice.reducer,
    deletedTasks: deletedTasksSlice.reducer,
  },
});

export { store };
export const { createTask, deleteTask, editTask } = activeTasksSlice.actions;
