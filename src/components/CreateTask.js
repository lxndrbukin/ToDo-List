import { useDispatch, useSelector } from 'react-redux';
import { setTask } from '../store';
import { createTask } from '../store';
import { GoPlus } from 'react-icons/go';
import Button from './reusable/Button';

export default function CreateTask() {
  const dispatch = useDispatch();
  const task = useSelector((state) => state.form.taskInput);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createTask(task));
    dispatch(setTask(''));
  };

  const handleChange = (e) => {
    dispatch(setTask(e.target.value));
  };

  return (
    <form onSubmit={handleSubmit} className='relative'>
      <div className='bg-white h-14 p-2 flex flex-row justify-between rounded border shadow-sm'>
        <input
          className='w-full text-xl focus:outline-none m-auto'
          onChange={handleChange}
          value={task}
          placeholder='Create new task...'
        />
        <Button className='m-auto h-10 w-10' buttonType='primary' type='submit'>
          <GoPlus />
        </Button>
      </div>
    </form>
  );
}
