import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store';
import { HashRouter } from 'react-router-dom';
import { NavigationProvider } from './context/navigation';
import App from './App';

const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>
);
