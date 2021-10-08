// App.js
import "./App.css";
import TodoItem from "./TodoItem";
// useTodos hook
import useTodos from "./useTodos";

function App() {
  const {
    todos,
    handleTodosClick,
    handleToggleIsDone,
    handleDeleteTodo,
    value,
    handleChange,
  } = useTodos();

  return (
    <div className="App">
      {/* todo delete */}
      <input
        type="text"
        placeholder="todo"
        value={value}
        onChange={handleChange}
      />
      <button onClick={handleTodosClick}>add todo</button>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleDeleteTodo={handleDeleteTodo}
          handleToggleIsDone={handleToggleIsDone}
        />
      ))}
    </div>
  );
}
export default App;
