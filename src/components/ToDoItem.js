import { useState, Fragment } from 'react';
import { GoPencil, GoTrashcan, GoFile } from 'react-icons/go';
import Button from './reusable/Button';

function ToDoItem({ listItem, index, handleDeleteItem, handleUpdateItem }) {
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [updatedItem, setUpdatedItem] = useState(listItem);

  const handleUpdateForm = () => {
    setShowUpdateForm(true);
  };

  const handleChange = (e) => {
    setUpdatedItem(e.target.value);
  };

  const handleClick = () => {
    handleUpdateItem(updatedItem, index);
    setShowUpdateForm(false);
  };

  const renderedItem = () => {
    if (showUpdateForm) {
      return (
        <Fragment>
          <input
            className='focus:outline-none border rounded w-full pl-0.5'
            onChange={handleChange}
            value={updatedItem}
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
        <div className='break-words h-fit my-auto'>{listItem}</div>
        <div className='flex flex-row my-auto'>
          <Button
            buttonType='primary'
            onClick={handleUpdateForm}
            className='h-10 w-10'
          >
            <GoPencil />
          </Button>
          <Button
            buttonType='danger'
            onClick={() => handleDeleteItem(listItem)}
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
