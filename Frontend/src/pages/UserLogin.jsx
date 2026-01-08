import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../styles/main.css';
import axios from 'axios';

const UserLogin = () => {
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      const response = await axios.post('http://localhost:3000/api/auth/user/login', {
        email,
        password
      }, {
        withCredentials: true
      });
      console.log(response.data);
      navigate("/");
    } catch (error) {
      console.error(error);
      alert("Login failed");
    }
  };
  return (
    <div className="user-page">
      <h1>FOOD REELS</h1>
      <div className="form-container">
        <h2>User Login</h2>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit">Login</button>
      </form>
      <div className="link">
        <Link to="/user/register">Don't have an account? Register</Link>
      </div>
    </div>
    </div>
  );
};

export default UserLogin;