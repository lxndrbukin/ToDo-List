import { useContext } from 'react';
import NavigationContext from '../../context/navigation';

function Link({ to, children, className }) {
  const { navigate } = useContext(NavigationContext);
  const handleClick = (e) => {
    e.preventDefault();
    navigate(to);
  };
  return (
    <a href={to} className={className} onClick={handleClick}>
      {children}
    </a>
  );
}

export default Link;
