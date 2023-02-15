import { useSelector } from 'react-redux';
import TaskItem from './TaskItem';

function CompletedTasks() {
  const completedTasksList = useSelector((state) => {
    return state.tasks.completedTasks;
  });

  const renderedCompletedTasks = completedTasksList.map((task) => {
    return <TaskItem task={task} key={task.id} />;
  });

  return <div className='mt-2 relative z-10'>{renderedCompletedTasks}</div>;
}

export default CompletedTasks;
