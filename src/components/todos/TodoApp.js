import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import TodoForm from './TodoForm';
import Todos from './Todos';
import { postTodo, getTodos, deleteTodo, patchTodo } from '../../services/todoApi';

const TodoApp = () => {
  const [todos, setTodos] = useState([]);


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

  const handleEdit = id => {
    patchTodo(id)
      .setTodos(prevState => [...prevState]);
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
      <Todos todos={todos} submitDelete={handleDelete} submitEdit={handleEdit} />
    </>
  );
};

TodoApp.propTypes = {};

export default TodoApp;
