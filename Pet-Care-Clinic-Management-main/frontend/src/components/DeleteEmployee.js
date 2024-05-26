// DeleteTodo.js
import React, { useState } from 'react';
import axios from 'axios';

const DeleteEmployee = () => {
  const [id, setId] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.delete(`http://localhost:4000/employees/${id}`);
      console.log(res.data);
      setId('');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h2>Delete Employee</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Todo ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <button type="submit">Delete</button>
      </form>
    </div>
  );
};

export default DeleteEmployee;
