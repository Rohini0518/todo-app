import "./App.css";
import Input from "./Input";
import Heading from "./Heading";
import List from "./List";
import ToDos from "./Todos";

function App() {
  return (
    <div className="todo-container">
      <Heading />
      <Input />
      <List task="Task 1" />
      <List task="Task 2" />
      <List task="Task 3" />
    </div>
  );
}

export default App;
