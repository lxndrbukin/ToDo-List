import { useState, Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { editTask } from '../store';
import { GoPencil, GoTrashcan, GoFile } from 'react-icons/go';
import { MdDoneOutline } from 'react-icons/md';
import Button from './reusable/Button';

function ToDoItem({ task, handleDeleteItem }) {
  const dispatch = useDispatch();
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [updatedTask, setUpdatedTask] = useState(task);

  const handleUpdateForm = () => {
    setShowUpdateForm(true);
  };

  const handleChange = (e) => {
    setUpdatedTask(e.target.value);
  };

  const handleClick = () => {
    dispatch(editTask({ original: task, updated: updatedTask }));
    setShowUpdateForm(false);
  };

  const renderedItem = () => {
    if (showUpdateForm) {
      return (
        <Fragment>
          <input
            className='focus:outline-none border rounded w-full pl-0.5'
            onChange={handleChange}
            value={updatedTask}
          />
          <Button
            buttonType='success'
            onClick={handleClick}
            className='h-10 w-10'
          >
            <GoFile />
          </Button>
        </Fragment>
      );
    }
    return (
      <Fragment>
        <div className='break-words h-fit my-auto'>{task}</div>
        <div className='flex flex-row my-auto'>
          <Button
            buttonType='success'
            onClick={handleUpdateForm}
            className='h-10 w-10'
          >
            <MdDoneOutline />
          </Button>
          <Button
            buttonType='primary'
            onClick={handleUpdateForm}
            className='h-10 w-10'
          >
            <GoPencil />
          </Button>
          <Button
            buttonType='danger'
            onClick={() => handleDeleteItem(task)}
            className='h-10 w-10'
          >
            <GoTrashcan />
          </Button>
        </div>
      </Fragment>
    );
  };

  return (
    <div className='bg-white w-full my-1 px-2 py-1.5 border rounded flex flex-row justify-between'>
      {renderedItem()}
    </div>
  );
}

export default ToDoItem;
