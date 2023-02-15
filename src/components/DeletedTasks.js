import { useSelector } from 'react-redux';
import TaskItem from './TaskItem';

function DeletedTasks() {
  const deletedTasksList = useSelector((state) => state.tasks.deletedTasks);

  const renderedDeletedTasks = deletedTasksList.map((task) => {
    return <TaskItem key={task.id} task={task} />;
  });
  return <div className='mt-2 relative z-10'>{renderedDeletedTasks}</div>;
}

export default DeletedTasks;
