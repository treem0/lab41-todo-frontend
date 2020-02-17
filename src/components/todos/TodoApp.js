import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TodoForm from './TodoForm';
import Todos from './Todos';

const TodoApp = () => {
  const [todo, setTodo] = useState([]);


  const createTodo = (name, description) => {
    postTodo({ name, description })
      .then(todo => setTodo(prevState => ({
        todo: [todo, ...prevState.todo]
      })));
  };

  return (
    <>
      <TodoForm />
      <Todos />
    </>
  );
};

TodoApp.propTypes = {};

export default TodoApp;
