import { createContext, useEffect, useState } from 'react';

const NavigationContext = createContext();

function NavigationProvider({ children }) {
  const [pathname, setPathname] = useState(window.location.pathname);

  useEffect(() => {
    const handler = () => {
      setPathname(window.location.pathname);
    };
    document.addEventListener('popstate', handler);
    return () => document.removeAddListener('popstate', handler);
  }, []);

  const navigate = (to) => {
    window.history.pushState({}, '', to);
  };

  return (
    <NavigationContext.Provider value={{ pathname, navigate }}>
      {children}
    </NavigationContext.Provider>
  );
}

export { NavigationProvider };
export default NavigationContext;
