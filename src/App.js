import './index.css';
import Route from './components/router/Route';
import Header from './components/Header';
import ActiveTasks from './components/ActiveTasks';

function App() {
  return (
    <div className='w-screen h-screen flex flex-col'>
      <Header />
      <div className='col-span-5 w-1/2 mt-72 mx-auto'>
        <Route path='/'>
          <ActiveTasks />
        </Route>
      </div>
    </div>
  );
}

export default App;
