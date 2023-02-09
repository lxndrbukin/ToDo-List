import { GoListUnordered, GoTasklist, GoTrashcan } from 'react-icons/go';
import Button from './reusable/Button';
import Link from './router/Link';

function Header() {
  return (
    <header className='bg-gradient-to-r from-sky-600 to-sky-700 h-80 w-full absolute z-0 flex'>
      <div className='m-auto flex'>
        <Link to='/'>
          <Button buttonType='light'>
            To Do <GoListUnordered className='my-auto mx-1' />
          </Button>
        </Link>
        <Link to='/completed'>
          <Button buttonType='success'>
            Completed <GoTasklist className='my-auto mx-1' />
          </Button>
        </Link>
        <Link to='/deleted'>
          <Button buttonType='danger'>
            Deleted <GoTrashcan className='my-auto mx-1' />
          </Button>
        </Link>
      </div>
    </header>
  );
}

export default Header;
