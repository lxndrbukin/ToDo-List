import { useState, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createTask, deleteTask } from '../store';
import Button from './reusable/Button';
import { GoPlus } from 'react-icons/go';
import ToDoItem from './ToDoItem';

function ToDo() {
  const dispatch = useDispatch();
  const activeTasksList = useSelector((state) => state.activeTasks);

  const [task, setTask] = useState('');

  const handleSetItem = (e) => {
    setTask(e.target.value);
  };

  const handleCreateTask = () => {
    dispatch(createTask(task));
    setTask('');
  };

  const handleDeleteItem = (task) => {
    dispatch(deleteTask(task));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const renderedList = activeTasksList.map((task, index) => {
    return (
      <ToDoItem
        handleDeleteItem={handleDeleteItem}
        task={task}
        key={index}
        index={index}
      />
    );
  });

  return (
    <Fragment>
      <form onSubmit={handleSubmit} className='relative'>
        <div className='bg-white h-14 p-2 flex flex-row justify-between rounded border shadow-sm '>
          <input
            className='w-full text-xl focus:outline-none m-auto'
            onChange={handleSetItem}
            value={task}
            placeholder='Create new task...'
          />
          <Button
            className='m-auto h-10 w-10'
            buttonType='primary'
            onClick={handleCreateTask}
          >
            <GoPlus />
          </Button>
        </div>
      </form>
      <div className='mt-2 relative z-10'>{renderedList}</div>
    </Fragment>
  );
}

export default ToDo;
