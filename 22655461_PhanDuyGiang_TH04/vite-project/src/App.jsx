import React, { useState, useEffect, useRef, useMemo, useReducer } from 'react';
import './App.css';

const todoReducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return [...state, action.payload];
    case 'TOGGLE':
      return state.map(todo =>
        todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
      );
    case 'DELETE':
      return state.filter(todo => todo.id !== action.payload);
    case 'SET':
      return action.payload;
    default:
      return state;
  }   
};

const App = () => {
  const [todos, dispatch] = useReducer(todoReducer, []);
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef();

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos')); 
    if (storedTodos) {
      dispatch({ type: 'SET', payload: storedTodos });
    }
  }, []);
  
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const filteredTodos = useMemo(() => {
    return {
      incomplete: todos.filter(todo => !todo.completed), 
      completed: todos.filter(todo => todo.completed),
    };
  }, [todos]);

  const handleAddTodo = () => { 
    if (!inputValue) return; 
    const newTodo = {
      id: Date.now(), 
      text: inputValue, 
      completed: false,
    };
    dispatch({ type: 'ADD', payload: newTodo });
    setInputValue('');
    inputRef.current.focus();
  };

  const handleToggleTodo = (id) => {
    const todo = todos.find(todo => todo.id === id);
    if (todo && !todo.completed) {
      const confirmCompletion = window.confirm("Bạn đã hoàn thành công việc này chưa?");
      if (confirmCompletion) {
        dispatch({ type: 'TOGGLE', payload: id });
      }
    }
  };

  const handleDeleteTodo = (id) => {
    dispatch({ type: 'DELETE', payload: id });
  };

  return (
    <div className="App">
      <div className="todo-container">
        <h1>To-Do List</h1>
        <div className="input-container">
          <input
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Thêm việc làm:"
          />
          <button onClick={handleAddTodo}>Add Todo</button>
        </div>
        <h2>Công việc chưa hoàn thành</h2>
        <ul>
          {filteredTodos.incomplete.map(todo => (
            <li key={todo.id}>
              <span 
                onClick={() => handleToggleTodo(todo.id)} 
                style={{ textDecoration: todo.completed ? 'line-through' : 'none', cursor: 'pointer' }}
              >
                {todo.text}
              </span>
              <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
            </li>
          ))}
        </ul>
        <h2 style={{ color: 'blue' }}>Đã hoàn thành</h2>
        <ul>
          {filteredTodos.completed.map(todo => (
            <li key={todo.id}>
              <span 
                onClick={() => handleToggleTodo(todo.id)} 
                style={{ textDecoration: todo.completed ? 'line-through' : 'none', cursor: 'pointer' }}
              >
                {todo.text}
              </span>
              <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;