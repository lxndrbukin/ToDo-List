import './index.css';
import { useSelector } from 'react-redux';
import Route from './components/router/Route';
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
        <Route path='/'>
          <Tasks taskList={activeTasks} showButtons />
        </Route>
        <Route path='/completed'>
          <Tasks taskList={completedTasks} showButtons={false} />
        </Route>
        <Route path='/deleted'>
          <Tasks taskList={deletedTasks} showButtons={false} />
        </Route>
      </div>
    </div>
  );
}
