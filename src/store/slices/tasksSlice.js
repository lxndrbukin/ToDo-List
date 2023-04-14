import { createSlice, nanoid } from '@reduxjs/toolkit';

const tasksSlice = createSlice({
  name: 'task',
  initialState: {
    activeTasks: JSON.parse(localStorage.getItem('activeTasks')) || [],
    completedTasks: JSON.parse(localStorage.getItem('completedTasks')) || [],
    deletedTasks: JSON.parse(localStorage.getItem('deletedTasks')) || [],
  },
  reducers: {
    createTask(state, action) {
      state.activeTasks.push({
        id: nanoid(),
        data: action.payload,
      });
      localStorage.setItem('activeTasks', JSON.stringify(state.activeTasks));
    },
    deleteTask(state, action) {
      const updatedActiveTasks = state.activeTasks.filter((task) => {
        return task.id !== action.payload.id;
      });
      state.activeTasks = updatedActiveTasks;
      localStorage.setItem('activeTasks', JSON.stringify(updatedActiveTasks));
      state.deletedTasks.push(action.payload);
      localStorage.setItem('deletedTasks', JSON.stringify(state.deletedTasks));
    },
    editTask(state, action) {
      const index = state.activeTasks.findIndex(
        (task) => task.id === action.payload.task.id
      );
      state.activeTasks[index] = {
        ...state.activeTasks[index],
        data: action.payload.update,
      };
      localStorage.setItem('activeTasks', JSON.stringify(state.activeTasks));
    },
    completeTask(state, action) {
      const updatedActiveTasks = state.activeTasks.filter((task) => {
        return task.id !== action.payload.id;
      });
      state.activeTasks = updatedActiveTasks;
      localStorage.setItem('activeTasks', JSON.stringify(updatedActiveTasks));
      state.completedTasks.push(action.payload);
      localStorage.setItem(
        'completedTasks',
        JSON.stringify(state.completedTasks)
      );
    },
  },
});

export const { createTask, deleteTask, completeTask, editTask } =
  tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer;
