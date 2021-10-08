// useTodos.js
import { useState, useRef, useEffect } from 'react';
import useInput from './useInput';

export default function useTodos() {
	// use ref
	const id = useRef(1);

	// set local storage to init todos 
	const [todos, setTodos] = useState( () => {
		console.log('init');
		let todoData = window.localStorage.getItem("todos") || "";
		if(todoData) {
			todoData = JSON.parse(todoData);
			id.current = todoData[0].id + 1;
		}
		else {
			todoData = [] ;

		}
		return todoData;
	});

	const {value, setValue, handleChange } = useInput()

	// save to localStorage after update-1+
	function writeTodosToLocalStorage(todos) {
		window.localStorage.setItem("todos", JSON.stringify(todos));
	}

	useEffect( () => {
		console.log('run 1st render!');

		// clear up LayoutEffects
		// unmount
		return () =>{
			console.log('unmount!');
		}
	}, []);

	useEffect( () => {
		writeTodosToLocalStorage(todos);
		console.log('useEffect todos :',JSON.stringify(todos));

		// clear up LayoutEffects
		return () =>{
			console.log('clearEffect todos :',JSON.stringify(todos));
		}
	}, [todos]);

	const handleTodosClick = () =>{
		// set input value 
		setTodos([{
			id: id.current,
			content: value,
			isDone: false
		}, ...todos])
		setValue('')
		// use ref
		id.current++
	}

	// todo delete
	const handleDeleteTodo = id => {
		setTodos(todos.filter(todo => todo.id !== id ))
	}

	// todo change state
	const handleToggleIsDone = id => {
		setTodos(todos.map(todo => {
			if (todo.id !== id) return todo
			return {
				...todo,
				isDone: !todo.isDone
			}
		}))
	}

	return {
		todos,
		handleTodosClick,
		handleToggleIsDone,
		handleDeleteTodo,
		value,
		setValue,
		handleChange
	}
}

