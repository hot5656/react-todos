import TodoItem from "./TodoItem";
// useTodos hook
import useTodos from "./useTodos";
import styled from "styled-components";

const Root = styled.div`
  width: 80%;
  margin: 80px auto 0 auto;
`;

export default function HomePage() {
  const {
    todos,
    handleTodosClick,
    handleToggleIsDone,
    handleDeleteTodo,
    value,
    handleChange,
  } = useTodos();

  return (
    <Root>
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
    </Root>
  );
}
