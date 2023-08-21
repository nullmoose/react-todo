import { useHistory } from 'react-router-dom';
import TodoListForm from '../components/TodoListForm';

function NewTodoList() {
  const history = useHistory();

  function newListHandler (listData) {
    fetch(
      'https://todo-13355-default-rtdb.firebaseio.com/todo_lists.json',
      {
        method: 'POST',
        body: JSON.stringify(listData),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    ).then(() => {
      history.replace('/');
    });
  }

  return (
    <div>
      <p className='text-center text-xl mb-2'>New Todo List</p>
      <TodoListForm submitHandler={newListHandler} />
    </div>
  );
}

export default NewTodoList;
