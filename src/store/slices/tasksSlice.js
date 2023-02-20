import { createSlice, nanoid } from '@reduxjs/toolkit';
import { fetchActiveTasks } from '../thunks/fetchActiveTasks';
import { fetchDeletedTasks } from '../thunks/fetchDeletedTasks';
import { createTask } from '../thunks/createTask';
import { deleteTask } from '../thunks/deleteTask';

const tasksSlice = createSlice({
  name: 'task',
  initialState: {
    activeTasks: [],
    completedTasks: [],
    deletedTasks: [],
  },
  reducers: {
    // createTask(state, action) {
    //   state.activeTasks.push({
    //     id: nanoid(),
    //     data: action.payload.data,
    //   });
    // },
    // deleteTask(state, action) {
    //   const updatedActiveTasks = state.activeTasks.filter((task) => {
    //     return task.id !== action.payload.id;
    //   });
    //   state.activeTasks = updatedActiveTasks;
    //   state.deletedTasks.push(action.payload);
    // },
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
  extraReducers(builder) {
    builder.addCase(fetchActiveTasks.fulfilled, (state, action) => {
      state.activeTasks = action.payload;
    });
    builder.addCase(fetchDeletedTasks.fulfilled, (state, action) => {
      state.deletedTasks = action.payload;
    });
    builder.addCase(createTask.fulfilled, (state, action) => {
      state.activeTasks.push(action.payload);
    });
    builder.addCase(deleteTask.fulfilled, (state, action) => {
      state.deletedTasks.push(action.payload);
      state.activeTasks = state.activeTasks.filter((task) => {
        return task.id !== action.payload.id;
      });
    });
  },
});

export const { completeTask, editTask } = tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer;
