import React from 'react';
import ReactDOM from 'react-dom/client';
import { NavigationProvider } from './context/navigation';
import App from './App';

const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(<App />);
