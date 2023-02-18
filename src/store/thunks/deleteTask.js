import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const deleteTask = createAsyncThunk(
  'activeTasks/delete',
  async (task) => {
    await axios.post('http://localhost:3005/deletedTasks', {
      data: task.data,
    });
    await axios.delete(`http://localhost:3005/activeTasks/${task.id}`);
    return task;
  }
);
