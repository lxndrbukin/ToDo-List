import './index.css';
import Route from './components/router/Route';
import Header from './components/Header';
import CreateTask from './components/CreateTask';
import ActiveTasks from './components/ActiveTasks';
import CompletedTasks from './components/CompletedTasks';
import DeletedTasks from './components/DeletedTasks';

function App() {
  return (
    <div className='w-screen h-screen flex flex-col'>
      <Header />
      <div className='col-span-5 w-1/2 mt-72 mx-auto'>
        {/* <CreateTask /> */}
        <Route path='/'>
          <ActiveTasks />
        </Route>
        <Route path='/completed'>
          <CompletedTasks />
        </Route>
        <Route path='/deleted'>
          <DeletedTasks />
        </Route>
      </div>
    </div>
  );
}

export default App;
