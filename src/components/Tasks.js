import TaskItem from './TaskItem';

function Tasks({ taskList, showButtons }) {
  const renderedList = taskList.map((task) => {
    return <TaskItem task={task} key={task.id} showButtons={showButtons} />;
  });

  return <div className='mt-2 relative z-10'>{renderedList}</div>;
}

export default Tasks;
