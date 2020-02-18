import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({ name, description, submitDelete, _id }) => (
  <section>
    <h2>Name: {name}</h2>
    <p>Description: {description}</p>
    <input type='checkbox' name='isComplete' />
    <button onClick={() => submitDelete(_id)}>Delete</button>
  </section>
);

Todo.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  _id: PropTypes.string.isRequired,
  submitDelete: PropTypes.func.isRequired
};

export default Todo;
