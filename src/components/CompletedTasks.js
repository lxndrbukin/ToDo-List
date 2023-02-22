import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCompletedTasks } from '../store';
import TaskItem from './TaskItem';

function CompletedTasks() {
  const completedTasksList = useSelector((state) => state.tasks.completedTasks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCompletedTasks());
  }, []);

  const renderedCompletedTasks = completedTasksList.map((task) => {
    return <TaskItem task={task} key={task.id} />;
  });

  return <div className='mt-2 relative z-10'>{renderedCompletedTasks}</div>;
}

export default CompletedTasks;
