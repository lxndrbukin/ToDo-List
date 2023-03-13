import { createSlice } from '@reduxjs/toolkit';

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
});

export const { setTask } = formSlice.actions;
export const formReducer = formSlice.reducer;
