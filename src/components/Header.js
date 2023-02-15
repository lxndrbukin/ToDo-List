import { useSelector } from 'react-redux';
import Button from './reusable/Button';
import Link from './router/Link';

function Header() {
  const { activeTasks, deletedTasks, completedTasks } = useSelector((state) => {
    return {
      activeTasks: state.tasks.activeTasks,
      deletedTasks: state.tasks.deletedTasks,
      completedTasks: state.tasks.completedTasks,
    };
  });
  return (
    <header className='bg-gradient-to-r from-sky-600 to-sky-700 h-80 w-full absolute z-0 flex flex-col'>
      <h1 className='text-5xl font-bold text-white w-fit m-auto'>
        Task Manager
      </h1>
      <div className='m-auto flex'>
        <Link to='/'>
          <Button buttonType='light'>To Do ({activeTasks.length})</Button>
        </Link>
        <Link to='/completed'>
          <Button buttonType='success'>
            Completed ({completedTasks.length})
          </Button>
        </Link>
        <Link to='/deleted'>
          <Button buttonType='danger'>Deleted ({deletedTasks.length})</Button>
        </Link>
      </div>
    </header>
  );
}

export default Header;
