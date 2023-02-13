import { useState, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createTask, removeTask } from '../store';
import Button from './reusable/Button';
import { GoPlus } from 'react-icons/go';
import ToDoItem from './ToDoItem';

function ToDo() {
  const dispatch = useDispatch();
  const tasksList = useSelector((state) => state.tasks);

  const [list, setList] = useState([]);
  const [item, setItem] = useState('');

  const handleSetItem = (e) => {
    setItem(e.target.value);
  };

  const handleAddItem = () => {
    dispatch(createTask(item));
    setItem('');
  };

  const handleDeleteItem = (item) => {
    dispatch(removeTask(item));
  };

  const handleUpdateItem = (item, index) => {
    const updatedList = [...list];
    updatedList[index] = item;
    setList(updatedList);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const renderedList = tasksList.map((listItem, index) => {
    return (
      <ToDoItem
        handleDeleteItem={handleDeleteItem}
        handleUpdateItem={handleUpdateItem}
        listItem={listItem}
        key={index}
        index={index}
      />
    );
  });

  return (
    <Fragment>
      <form onSubmit={handleSubmit} className='relative'>
        <div className='bg-white w-full h-14 p-2 flex flex-row w-fit justify-between rounded border shadow-sm '>
          <input
            className='w-full text-xl focus:outline-none m-auto'
            onChange={handleSetItem}
            value={item}
            placeholder='Create new task...'
          />
          <Button
            className='m-auto h-10 w-10'
            buttonType='primary'
            onClick={handleAddItem}
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
