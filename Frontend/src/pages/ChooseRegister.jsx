import React from 'react';
import { Link } from 'react-router-dom';

const ChooseRegister = () => {
  return (
    <div>
      <h1>Choose Registration Type</h1>
      <Link to="/user/register">Register as User</Link>
      <br />
      <Link to="/food-partner/register">Register as Food Partner</Link>
    </div>
  );
};

export default ChooseRegister;