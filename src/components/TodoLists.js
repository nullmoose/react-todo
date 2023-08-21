import { Link } from 'react-router-dom';
import TodoListCard from './TodoListCard';

function TodoLists(props) {
  return (
    <div>
      <div className='grid grid-cols-4 gap-4'>
        {props.lists.map((list) => (
          <TodoListCard key={list.id} id={list.id} listName={list.name} todoNumber='1' />
        ))}
      </div>
      <div className='text-center'>
        <Link to="/new">
          <button className='rounded-full bg-green-500 px-5 py-1 mt-8'>New Todo List</button>
        </Link>
      </div>
    </div>
  );
}

export default TodoLists;
