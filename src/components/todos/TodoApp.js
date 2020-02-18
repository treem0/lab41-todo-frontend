import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import TodoForm from './TodoForm';
import Todos from './Todos';
import { postTodo, getTodos } from '../../services/todoApi';

const TodoApp = () => {
  const [todos, setTodos] = useState([]);


  //   const fetchedTodos = () => {
  //     const fetchedTodos = getTodos();
  //     setTodos(fetchedTodos);
  //   };

  const createTodo = (name, description) => {
    postTodo({ name, description })
      .then(todo => setTodos(prevState => [...prevState, todo]));
  };
  

  return (
    <>
      <TodoForm submitTodo={createTodo} />
      <Todos />
    </>
  );
};

TodoApp.propTypes = {};

export default TodoApp;
