import { useContext } from 'react';
import NavigationContext from '../context/navigation';
import CreateTask from './CreateTask';
import Search from './Search';
import Button from './reusable/Button';
import Link from './router/Link';

function Header() {
  const { currentPathname } = useContext(NavigationContext);
  const bar = currentPathname === '/' ? <CreateTask /> : <Search />;
  return (
    <header className='bg-gradient-to-r from-sky-600 to-sky-700 h-80 w-full absolute z-0 flex flex-col'>
      <h1 className='text-5xl font-bold text-white w-fit m-auto'>
        Task Manager
      </h1>
      <div className='m-auto flex'>
        <Link to='/'>
          <Button buttonType='light'>To Do</Button>
        </Link>
        <Link to='/completed'>
          <Button buttonType='success'>Completed</Button>
        </Link>
        <Link to='/deleted'>
          <Button buttonType='danger'>Deleted</Button>
        </Link>
      </div>
      {bar}
    </header>
  );
}

export default Header;
