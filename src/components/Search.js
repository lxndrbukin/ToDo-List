import Button from './reusable/Button';

function Search() {
  return (
    <form className='relative'>
      <div className='bg-white h-14 p-2 flex flex-row justify-between rounded border shadow-sm '>
        <input
          className='w-full text-xl focus:outline-none m-auto'
          placeholder='Search...'
        />
        <Button className='m-auto h-10 w-10' buttonType='primary'>
          Search
        </Button>
      </div>
    </form>
  );
}

export default Search;
