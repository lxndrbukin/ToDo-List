import { useState } from 'react';
import Button from './reusable/Button';
import { GoPlus } from 'react-icons/go';
import ToDoItem from './ToDoItem';

function ToDo() {
  const [list, setList] = useState([]);
  const [item, setItem] = useState('');

  const handleSetItem = (e) => {
    setItem(e.target.value);
  };

  const handleAddItem = () => {
    setList([...list, item]);
    setItem('');
  };

  const handleDeleteItem = (item) => {
    const updatedList = list.filter((listItem) => listItem !== item);
    setList(updatedList);
  };

  const handleUpdateItem = (item, index) => {
    const updatedList = [...list];
    updatedList[index] = item;
    setList(updatedList);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const renderedList = list.map((listItem, index) => {
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

  const listContainer = <div className='mt-2'>{renderedList}</div>;

  return (
    <div className='mt-60 mx-auto'>
      <form
        onSubmit={handleSubmit}
        className='flex flex-row w-fit justify-between relative'
      >
        <input
          className='w-80 h-14 pl-2 pr-11 rounded shadow-sm text-xl focus:outline-none'
          onChange={handleSetItem}
          value={item}
          placeholder='Create new task...'
        />
        <Button
          className='absolute h-fit right-1 inset-y-2'
          buttonType={'primary'}
          onClick={handleAddItem}
        >
          <GoPlus />
        </Button>
      </form>
      {list.length !== 0 && listContainer}
    </div>
  );
}

export default ToDo;
