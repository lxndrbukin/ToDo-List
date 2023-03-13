import { useState, Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { editTask, deleteTask, completeTask } from '../store';
import { GoPencil, GoTrashcan, GoFile } from 'react-icons/go';
import { MdDoneOutline } from 'react-icons/md';
import Button from './reusable/Button';

export default function TaskItem({ task, showButtons }) {
  const dispatch = useDispatch();
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [updatedTask, setUpdatedTask] = useState(task.data);

  const handleDeleteItem = (task) => {
    dispatch(deleteTask(task));
  };

  const handleCompleteTask = (task) => {
    dispatch(completeTask(task));
  };

  const handleUpdateForm = () => {
    setShowUpdateForm(true);
  };

  const handleChangeTask = (e) => {
    setUpdatedTask(e.target.value);
  };

  const handleUpdateTask = () => {
    dispatch(editTask({ task, update: updatedTask }));
    setShowUpdateForm(false);
  };

  let buttons;
  if (showButtons) {
    buttons = (
      <div className='flex flex-row my-auto'>
        <Button
          buttonType='primary'
          onClick={handleUpdateForm}
          className='h-10 w-10'
        >
          <GoPencil />
        </Button>
        <Button
          buttonType='success'
          onClick={() => handleCompleteTask(task)}
          className='h-10 w-10'
        >
          <MdDoneOutline />
        </Button>
        <Button
          buttonType='danger'
          onClick={() => handleDeleteItem(task)}
          className='h-10 w-10'
        >
          <GoTrashcan />
        </Button>
      </div>
    );
  } else {
    buttons = null;
  }

  const renderedItem = () => {
    if (showUpdateForm) {
      return (
        <Fragment>
          <input
            className='focus:outline-none border rounded w-full pl-0.5'
            onChange={handleChangeTask}
            value={updatedTask}
          />
          <Button
            buttonType='success'
            onClick={handleUpdateTask}
            className='h-10 w-10'
          >
            <GoFile />
          </Button>
        </Fragment>
      );
    }
    return (
      <Fragment>
        <div className='break-words h-fit my-auto'>{task.data}</div>
        {buttons}
      </Fragment>
    );
  };

  return (
    <div className='bg-white w-full my-1 px-2 py-1.5 border rounded flex flex-row justify-between'>
      {renderedItem()}
    </div>
  );
}
