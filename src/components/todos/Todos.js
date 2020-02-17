import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';

const Todos = () => {

  const todos = [{
    name: 'This App',
    description: 'Full stack'
  }];

  const todoElements = todos.map(todo => (
    <li key={todo.name} >
      <Todo {...todo} />
    </li>
  ));
  return (
    <ul>
      {todoElements}
    </ul>

  );
};

Todos.propTypes = {};

export default Todos;
