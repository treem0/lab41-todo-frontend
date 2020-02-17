import React, { useState } from 'react';
import PropTypes from 'prop-types';

const TodoForm = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  
  const handleSubmit = event => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' name='name' value={name} placeholder='Todo Name' onChange={({ target }) => setName(target.value)} />
      <textarea name='description' value={description} placeholder='Todo Description' onChange={({ target }) => setDescription(target.value)} />
      <button>Submit</button>
    </form>
  );
};

TodoForm.propTypes = {};

export default TodoForm;
