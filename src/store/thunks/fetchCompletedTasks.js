import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCompletedTasks = createAsyncThunk(
  'completedTasks/fetch',
  async () => {
    const res = await axios.get('http://localhost:3005/completedTasks');
    return res.data;
  }
);
