import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchDeletedTasks = createAsyncThunk(
  'deletedTasks/fetch',
  async () => {
    const res = await axios.get('http://localhost:3005/deletedTasks');
    return res.data;
  }
);
