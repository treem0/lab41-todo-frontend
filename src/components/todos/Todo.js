import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({ name, description }) => (
  <section>
    <h2>Name: {name}</h2>
    <p>Description: {description}</p>
    <input type='checkbox' name='isComplete' />
    <button>Delete</button>
  </section>
);

Todo.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default Todo;
