function ToDoItem({ listItem }) {
  return (
    <div>
      <div>{listItem}</div>
      <div>
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </div>
  );
}

export default ToDoItem;
