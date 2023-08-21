import { useRef } from 'react';

function TodoListForm(props) {
  const nameInputRef = useRef();

  function onSubmit(e) {
    e.preventDefault();

    const name = nameInputRef.current.value;

    props.submitHandler({ name: name });
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor='name'>List Name</label>
        <input type='text' required id='name' ref={nameInputRef} />

        <button>Create List</button>
      </form>
    </div>
  );
}

export default TodoListForm;
