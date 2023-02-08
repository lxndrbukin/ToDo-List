import './index.css';
import ToDo from './components/ToDo';

function App() {
  return (
    <div className='w-screen h-screen flex bg-gradient-to-r from-indigo-400 to-indigo-500'>
      <ToDo />
    </div>
  );
}

export default App;
