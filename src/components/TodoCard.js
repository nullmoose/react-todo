function TodoCard(props) {
  return (
    <div className="card col-span-1">
      <p className="text-l">{props.description}</p>
      <button className="rounded-full bg-blue-500 px-5 py-1 mt-2">Complete</button>
    </div>
  );
}

export default TodoCard;
