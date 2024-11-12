import ButtonEditDelete from "./ButtonEditDelete";

function List(props) {
  return (
    <div className="todo-item">
      <p>{props.task}</p>
      <ButtonEditDelete />
    </div>
  );
}

export default List;
