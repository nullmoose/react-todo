import { useState } from 'react';
import TodoCard from "./TodoCard";
import Backdrop from './ui/Backdrop';
import Modal from './ui/Modal';
import TodoForm from './TodoForm';

function TodoList(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function newTodoHandler() {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  return (
    <div>
      <p className='text-center text-xl mb-2'>{props.name}</p>
      <div className='grid grid-cols-4 gap-4'>
        {props.todos.map((todo) => (
          <TodoCard description={todo.description} key={todo.id} />
        ))}
      </div>
      <div className='text-center'>
        <button className='rounded-full bg-green-500 px-5 py-1 mt-8' onClick={newTodoHandler}>New Todo List</button>
      </div>
      {modalIsOpen && (
        <Modal>
          <TodoForm submitHandler={props.submitTodoHandler} cancelHandler={closeModal} />
        </Modal>
      )}
      {modalIsOpen && (
        <Backdrop onCancel={closeModal} />
      )}
    </div>
  );
}

export default TodoList;
