import { useState } from 'react';
import ToDoItem from './ToDoItem';

function ToDo() {
  const [list, setList] = useState([]);
  const [item, setItem] = useState('');

  const handleChange = (e) => {
    setItem(e.target.value);
  };

  const handleClick = () => {
    setList([...list, item]);
  };

  const renderedList = list.map((listItem, index) => {
    return <ToDoItem listItem={listItem} key={index} />;
  });
  return (
    <div>
      <div>
        <input onChange={handleChange} value={item} />
        <button onClick={handleClick}>Add to list</button>
      </div>
      <div>{renderedList}</div>
    </div>
  );
}

export default ToDo;
