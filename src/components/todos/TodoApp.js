import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import TodoForm from './TodoForm';
import Todos from './Todos';
import { postTodo, getTodos, deleteTodo } from '../../services/todoApi';

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

  const handleDelete = id => {
    deleteTodo(id)
      .then(deletedTodo => {
        setTodos(prevState => prevState.filter(todo => deletedTodo._id !== todo._id));
      });
  };
  
  useEffect(() => {
    getTodos()
      .then(todoOb => {
        setTodos(todoOb);
      });
  }, []);

  return (
    <>
      <TodoForm submitTodo={createTodo} />
      <Todos todos={todos} submitDelete={handleDelete} />
    </>
  );
};

TodoApp.propTypes = {};

export default TodoApp;
