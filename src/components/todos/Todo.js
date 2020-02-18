import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { patchTodo } from '../../services/todoApi';

const Todo = ({ name, description, submitDelete, _id }) => {
  const [updateDescription, setUpdateDescription] = useState('');
    

  const handleSubmit = event => {
    event.preventDefault();
    patchTodo(description);
  };
  return (
    <section>
      <h2>Name: {name}</h2>
      <p>Description: {description}</p>
      <input type='checkbox' name='isComplete' />
      <button onClick={() => submitDelete(_id)}>Delete</button>
      <form onSubmit={handleSubmit}>
        <input type='text' name='description' value={updateDescription} onChange={({ target }) => setUpdateDescription(target.value)} />
        <button>Edit</button>
      </form>
    </section>
  );};

Todo.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  _id: PropTypes.string.isRequired,
  submitDelete: PropTypes.func.isRequired
};

export default Todo;
