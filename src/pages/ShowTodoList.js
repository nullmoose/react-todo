import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import TodoList from "../components/TodoList";

function ShowTodoList() {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [loadedList, setLoadedList] = useState(null);

  function addTodoHandler (todoData) {
    fetch(
      'https://todo-13355-default-rtdb.firebaseio.com/todo_lists/' + id + '/todos.json',
      {
        method: 'POST',
        body: JSON.stringify(todoData),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
      .then(() => {
        reloadList();
      });
  }

  function reloadList () {
    setIsLoading(true);
    fetch('https://todo-13355-default-rtdb.firebaseio.com/todo_lists/' + id + '.json')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const todos = []

        for (const key in data.todos) {
          const todo = {
            id: key,
            ...data.todos[key]
          };

          todos.push(todo);
        }

        data.todos = todos

        setIsLoading(false);
        setLoadedList(data);
      });
  }

  useEffect(reloadList, [id]);

  if (isLoading) {
    return (
      <div>
        <p>Loading Todos...</p>
      </div>
    );
  }

  return (
    <div>
      <TodoList name={loadedList.name} todos={loadedList.todos} submitTodoHandler={addTodoHandler} />
    </div>
  );
}

export default ShowTodoList;
