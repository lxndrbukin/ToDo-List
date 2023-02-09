import { useContext } from 'react';
import NavigationContext from '../../context/navigation';

function Route({ path, children }) {
  const { currentPathname } = useContext(NavigationContext);
  if (path === currentPathname) {
    return children;
  } else {
    return null;
  }
}

export default Route;
