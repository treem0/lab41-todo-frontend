import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TodoForm from './TodoForm';
import Todos from './Todos';

const TodoApp = () => {
  return (
    <>
      <TodoForm />
      <Todos />
    </>
  );
};

TodoApp.propTypes = {};

export default TodoApp;
