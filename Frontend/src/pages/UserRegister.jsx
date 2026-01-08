import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/main.css';
import axios from 'axios';
const UserRegister = () => {
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    const firstName = e.target.firstName.value;
    const lastName = e.target.lastName.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;

    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    try {
      const response = await axios.post('http://localhost:3000/api/auth/user/register', {
        fullName: firstName + " " + lastName,
        email,
        password
      }, {
        withCredentials: true
      });
      console.log(response.data);
      navigate("/");
    } catch (error) {
      console.error(error);
      alert("Registration failed");
    }
  };

  return (
    <div>
      <h1>FOOD REELS</h1>
      <div className="form-container">
        <h2>User Register</h2>
      <form onSubmit={handleRegister}>
        <div className="name-row">
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" name="firstName" required />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" name="lastName" required />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input type="password" id="confirmPassword" name="confirmPassword" required />
        </div>
        <button type="submit">Register</button>
      </form>
      <div className="link">
        <Link to="/user/login">Already have an account? Login</Link>
      </div>
    </div>
    </div>
  );
};


export default UserRegister;