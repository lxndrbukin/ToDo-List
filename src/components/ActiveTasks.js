import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchActiveTasks } from '../store';
import TaskItem from './TaskItem';

function ActiveTasks() {
  const activeTasksList = useSelector((state) => state.tasks.activeTasks);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchActiveTasks());
  }, [dispatch]);

  const renderedList = activeTasksList.map((task) => {
    return <TaskItem task={task} key={task.id} />;
  });

  return <div className='mt-2 relative z-10'>{renderedList}</div>;
}

export default ActiveTasks;
