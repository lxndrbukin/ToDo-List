import { useState } from 'react';
import { GoPencil, GoTrashcan } from 'react-icons/go';
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
    return (
      <div className='bg-white my-1 p-1 rounded flex flex-row justify-between'>
        <div>{listItem}</div>
        <div className='flex flex-row'>
          <Button buttonType={'primary'} onClick={handleUpdateForm}>
            <GoPencil />
          </Button>
          <Button
            buttonType={'danger'}
            onClick={() => handleDeleteItem(listItem)}
          >
            <GoTrashcan />
          </Button>
        </div>
      </div>
    );
  };

  const renderedUpdateForm = () => {
    return (
      <div>
        <div>
          <input onChange={handleChange} value={updatedItem} />
          <Button buttonType={'secondary'} onClick={handleClick}>
            Submit
          </Button>
        </div>
      </div>
    );
  };

  return showUpdateForm ? renderedUpdateForm() : renderedItem();
}

export default ToDoItem;
