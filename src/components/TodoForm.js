import { useRef } from 'react';

function TodoForm(props) {
  const descriptionInputRef = useRef();

  function onSubmit(e) {
    e.preventDefault();

    const description = descriptionInputRef.current.value;

    props.submitHandler({ description: description });
    props.cancelHandler();
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor='description'>Todo Description</label>
        <input type='text' required id='description' ref={descriptionInputRef} />

        <div>
          <button type='submit' className="rounded-full bg-blue-500 px-5 py-1 mt-2" onClick={onSubmit}>Create Todo</button>
          <button type='cancel' className="rounded-full bg-red-500 px-5 py-1 mt-2" onClick={props.cancelHandler}>Cancel</button>
        </div>
      </form>
    </div>
  );
}

export default TodoForm;
