import { createSlice } from '@reduxjs/toolkit';
import { createTask } from '../thunks/createTask';

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
    builder.addCase(createTask.fulfilled, (state, action) => {
      state.taskInput = '';
    });
  },
});

export const { setTask } = formSlice.actions;
export const formReducer = formSlice.reducer;
