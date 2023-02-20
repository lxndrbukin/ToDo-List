import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const createTask = createAsyncThunk(
  'activeTasks/create',
  async (data) => {
    const res = await axios.post('http://localhost:3005/tasks/activeTasks', {
      data,
    });
    return res.data;
  }
);
