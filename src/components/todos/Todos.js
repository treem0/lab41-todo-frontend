import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';

const Todos = ({ todos, submitDelete }) => {


  const todoElements = todos.map(todo => (
    <li key={todo._id} >
      <Todo {...todo} submitDelete={submitDelete} />
    </li>
  ));
  return (
    <ul>
      {todoElements}
    </ul>

  );
};

Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  submitDelete: PropTypes.func.isRequired
};

export default Todos;
