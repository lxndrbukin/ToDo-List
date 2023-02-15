import { createSlice, nanoid } from '@reduxjs/toolkit';

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
        return task.id !== action.payload.id;
      });
      state.activeTasks = updatedActiveTasks;
      state.deletedTasks.push(action.payload);
    },
    editTask(state, action) {
      const index = state.activeTasks.indexOf(action.payload.original);
      state.activeTasks[index] = action.payload.updated;
    },
    completeTask(state, action) {
      const updatedActiveTasks = state.activeTasks.filter((task) => {
        return task.id !== action.payload.id;
      });
      state.activeTasks = updatedActiveTasks;
      state.completedTasks.push(action.payload);
    },
  },
});

export const { createTask, deleteTask, completeTask, editTask } =
  tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer;