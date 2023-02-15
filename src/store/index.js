import { configureStore, createSlice, nanoid } from '@reduxjs/toolkit';

const tasksSlice = createSlice({
  name: 'task',
  initialState: {
    activeTasks: [],
    completedTasks: [],
    deletedTasks: [],
  },
  reducers: {
    createTask(state, action) {
      state.activeTasks.push({
        id: nanoid(),
        data: action.payload.data,
      });
    },
    deleteTask(state, action) {
      const updatedActiveTasks = state.activeTasks.filter((task) => {
        return task.id !== action.payload;
      });
      state.activeTasks = updatedActiveTasks;
    },
    editTask(state, action) {
      const index = state.activeTasks.indexOf(action.payload.original);
      state.activeTasks[index] = action.payload.updated;
    },
    completeTask(state, action) {},
  },
});

const store = configureStore({
  reducer: {
    tasks: tasksSlice.reducer,
  },
});

export { store };
export const { createTask, deleteTask, editTask, completeTask } =
  tasksSlice.actions;
