// TodoItem.js
import styled from 'styled-components';
import { MEDIA_QUERY_MD, MEDIA_QUERY_LG} from './constants/style'
// react direct
import React from 'react';


const TodoItemWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
  border: 1px solid black;

  & + & {
    margin-top: 12px;
  }
`

const TodoContent = styled.div`
// 取用 theme
	color: ${props => props.theme.colors.primary_300};
	
  font-size: ${props => props.size === 'XL' ? '20px' : '12px'};

  // todo change state
  // props.isDone show text-decoration: line-through;
  ${props => props.isDone && `
    text-decoration: line-through;
  `}
`

const TodoButtonWrapper= styled.div``

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
`

export const RedButton = styled(Button)`
  color: red;
`

// add class component
export default class todoItem extends React.Component {
  // case #1 fix for handleToggleClick, handleDeleteClick's this
  // constructor(props) {
  //   super(props)
  //   this.handleToggleClick = this.handleToggleClick.bind(this)
  //   this.handleDeleteTodo = this.handleDeleteClick.bind(this)
  // }
  // handleToggleClick() {
  //   const {handleToggleIsDone, todo} = this.props;
  //   handleToggleIsDone(todo.id)
  // }
  // 
  // handleDeleteClick() {
  //   const {handleDeleteTodo, todo} = this.props;
  //   handleDeleteTodo(todo.id)
  // }

  // use state (class component)
  constructor(props) {
    super(props)

    this.state = {
      counter: 1
    } 
  }

  // case #2 fix for handleToggleClick, handleDeleteClick's this
  handleToggleClick= () => {
    const {handleToggleIsDone, todo} = this.props;
    handleToggleIsDone(todo.id)
    // use state (class component)
    this.setState({
      counter: this.state.counter + 1
    })
  }
  
  handleDeleteClick= () => {
    const {handleDeleteTodo, todo} = this.props;
    handleDeleteTodo(todo.id)
  }

  render() {
    const {
      className, 
      size, 
      todo
    } = this.props;

    return  (
      <TodoItemWrapper className={className} data-tddo-id={todo.id} >
        <TodoContent isDone={todo.isDone} size={size}>{todo.content}</TodoContent>
        <TodoButtonWrapper>
          <Button onClick={this.handleToggleClick}>
            { todo.isDone && '已完成'}
            { !todo.isDone && '未完成'}
          </Button>
          <RedButton onClick={this.handleDeleteClick}>刪除</RedButton>
        </TodoButtonWrapper>
      </TodoItemWrapper>
  )
  }
}

// for other import
// 因為 function re-style, 增加 class 
function TodoItemF({ className, size, todo, handleDeleteTodo, handleToggleIsDone}) {
  //  todo change state
  const handleToggleClick = () => {
    handleToggleIsDone(todo.id)
  }
  // todo delete
  const handleDeleteClick = () => {
    handleDeleteTodo(todo.id)
  }

  return (
      <TodoItemWrapper className={className} data-tddo-id={todo.id} >
        {/* todo change state */}
        <TodoContent isDone={todo.isDone} size={size}>{todo.content}</TodoContent>
        {/* javascript:alert(1) */}
        {/* <a href={todo.content}>click me</a> */}
        {/* <a href={window.encodeURIComponent(todo.content)}>click me</a> */}
        <TodoButtonWrapper>
          {/* todo change state */}
          <Button onClick={handleToggleClick}>
            {/* { todo.isDone ? '已完成' : '未完成'} */}
            {/* todo.isDone 顯示已完成  */}
            { todo.isDone && '已完成'}
            { !todo.isDone && '未完成'}

          </Button>
          {/* todo delete */}
          <RedButton onClick={handleDeleteClick}>刪除</RedButton>
        </TodoButtonWrapper>
      </TodoItemWrapper>
  )
}

