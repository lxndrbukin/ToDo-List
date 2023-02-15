import { createSlice } from '@reduxjs/toolkit';
import { createTask } from './tasksSlice';

const formSlice = createSlice({
  name: 'form',
  initialState: {
    taskInput: '',
  },
  reducers: {
    setTask(state, action) {
      state.taskInput = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(createTask, (state, action) => {
      state.taskInput = '';
    });
  },
});

export const { setTask } = formSlice.actions;
export const formReducer = formSlice.reducer;
