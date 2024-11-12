import List from "./List";
// import ButtonEditDelete from "./ButtonEditDelete";

function ToDos() {
  const taskList = ["Task 1", "Task 2", "Task 3"];
  return (
    <div>
      <List
        task={taskList.map((task, index) => (
          <li key={index}> {task} </li>
        ))}
      />
    </div>
  );
}

export default ToDos;
