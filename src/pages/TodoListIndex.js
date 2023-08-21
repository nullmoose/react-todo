import { useState, useEffect } from 'react';
import TodoLists from '../components/TodoLists';

function TodoListIndex() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedLists, setLoadedLists] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch('https://todo-13355-default-rtdb.firebaseio.com/todo_lists.json')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const lists = [];

        for (const key in data) {
          const list = {
            id: key,
            ...data[key]
          };

          lists.push(list);
        }

        setIsLoading(false);
        setLoadedLists(lists);
      });
  }, []);

  if (isLoading) {
    return (
      <div>
        <p>Loading Lists...</p>
      </div>
    );
  }

  return (
    <div>
      <p className='text-center text-xl mb-2'>Todo Lists</p>
      <TodoLists lists={loadedLists} />
    </div>
  );
}

export default TodoListIndex;
