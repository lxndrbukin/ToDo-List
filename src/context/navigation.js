import { createContext, useEffect, useState } from 'react';

const NavigationContext = createContext();

function NavigationProvider({ children }) {
  const [currentPathname, setCurrentPathname] = useState(
    window.location.pathname
  );

  useEffect(() => {
    const handler = () => {
      setCurrentPathname(window.location.pathname);
    };
    document.addEventListener('popstate', handler);
    return () => document.removeAddListener('popstate', handler);
  }, []);

  const navigate = (to) => {
    window.history.pushState({}, '', to);
    setCurrentPathname(to);
  };

  return (
    <NavigationContext.Provider value={{ currentPathname, navigate }}>
      {children}
    </NavigationContext.Provider>
  );
}

export { NavigationProvider };
export default NavigationContext;
