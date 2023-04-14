import './index.css';
import { useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import CreateTask from './components/CreateTask';
import Tasks from './components/Tasks';

export default function App() {
  const { activeTasks, deletedTasks, completedTasks } = useSelector(
    (state) => state.tasks
  );
  return (
    <div className='w-screen h-screen flex flex-col'>
      <Header />
      <div className='col-span-5 w-1/2 mt-72 mx-auto'>
        <CreateTask />
        <Routes>
          <Route
            path='/'
            element={<Tasks taskList={activeTasks} showButtons />}
          />
          <Route
            path='/completed'
            element={<Tasks taskList={completedTasks} showButtons={false} />}
          />
          <Route
            path='/deleted'
            element={<Tasks taskList={deletedTasks} showButtons={false} />}
          />
        </Routes>
      </div>
    </div>
  );
}
