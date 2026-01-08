import React from 'react';
import '../styles/main.css';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

const FoodPartnerLogin = () => {

const navigate = useNavigate();

const handleSubmit = async(e) => {
  e.preventDefault();

  const email = e.target.email.value;
  const password = e.target.password.value;

  try {
    const response = await axios.post('http://localhost:3000/api/auth/foodpartner/login', {
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
    <div>
      <h1>FOOD REELS</h1>
      <div className="form-container">
        <h2>Food Partner Login</h2>
      <form onSubmit={handleSubmit}>
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
        <a href="/food-partner/register">Don't have an account? Register</a>
      </div>
    </div>
    </div>
  );
};

export default FoodPartnerLogin;