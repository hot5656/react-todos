// TodoItem.js
import styled from "styled-components";
import { MEDIA_QUERY_MD, MEDIA_QUERY_LG } from "./constants/style";
// react direct
import React from "react";
// add propTypes
import PropTypes from "prop-types";

const TodoItemWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
  border: 1px solid black;

  & + & {
    margin-top: 12px;
  }
`;

const TodoContent = styled.div`
  // 取用 theme
  color: ${(props) => props.theme.colors.primary_300};

  font-size: ${(props) => (props.size === "XL" ? "20px" : "12px")};

  // todo change state
  // props.isDone show text-decoration: line-through;
  ${(props) =>
    props.isDone &&
    `
    text-decoration: line-through;
  `}
`;

const TodoButtonWrapper = styled.div``;

const Button = styled.button`
  padding: 4px;
  color: black;

  ${MEDIA_QUERY_MD} {
    font-size: 16px;
  }

  ${MEDIA_QUERY_LG} {
    font-size: 20px;
  }

  &:hover {
    color: red;
  }

  // 相連之 component
  & + & {
    margin-left: 10px;
  }
`;

export const RedButton = styled(Button)`
  color: red;
`;

// for other import
// 因為 function re-style, 增加 class
export default function TodoItem({
  className,
  size,
  todo,
  handleDeleteTodo,
  handleToggleIsDone,
}) {
  //  todo change state
  const handleToggleClick = () => {
    handleToggleIsDone(todo.id);
  };
  // todo delete
  const handleDeleteClick = () => {
    handleDeleteTodo(todo.id);
  };

  return (
    <TodoItemWrapper className={className} data-tddo-id={todo.id}>
      {/* todo change state */}
      <TodoContent isDone={todo.isDone} size={size}>
        {todo.content}
      </TodoContent>
      {/* javascript:alert(1) */}
      {/* <a href={todo.content}>click me</a> */}
      {/* <a href={window.encodeURIComponent(todo.content)}>click me</a> */}
      <TodoButtonWrapper>
        {/* todo change state */}
        <Button onClick={handleToggleClick}>
          {/* { todo.isDone ? '已完成' : '未完成'} */}
          {/* todo.isDone 顯示已完成  */}
          {todo.isDone && "已完成"}
          {!todo.isDone && "未完成"}
        </Button>
        {/* todo delete */}
        <RedButton onClick={handleDeleteClick}>刪除</RedButton>
      </TodoButtonWrapper>
    </TodoItemWrapper>
  );
}

// add propTypes
TodoItem.propTypes = {
  className: PropTypes.string,
  size: PropTypes.string,
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    content: PropTypes.string,
    isDone: PropTypes.bool,
  }),
  handleDeleteTodo: PropTypes.func,
  handleToggleIsDone: PropTypes.func,
};
