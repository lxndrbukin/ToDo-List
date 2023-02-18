import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchActiveTasks = createAsyncThunk(
  'activeTasks/fetch',
  async () => {
    const res = await axios.get('http://localhost:3005/activeTasks');
    return res.data;
  }
);
