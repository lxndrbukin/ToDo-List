import { useDispatch, useSelector } from 'react-redux';
import TaskItem from './TaskItem';

function DeletedTasks() {
  const dispatch = useDispatch();
  const deletedTasksList = useSelector((state) => state.tasks.deletedTasks);

  const renderedDeletedTasks = deletedTasksList.map((deletedTask) => {
    return <TaskItem key={deletedTask.id} />;
  });
  return <div>Deleted</div>;
}

export default DeletedTasks;
