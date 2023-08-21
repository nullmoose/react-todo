import { Link } from "react-router-dom";

function TodoListCard(props) {
  return (
    <div className="card col-span-1">
      <p className="text-l underline">{props.listName}</p>
      <Link to={"/lists/" + props.id}>
        <button className="rounded-full bg-blue-500 px-5 py-1 mt-2">View</button>
      </Link>
    </div>
  );
}

export default TodoListCard;
