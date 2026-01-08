import React from 'react';
import '../styles/main.css';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
const FoodPartnerRegister = () => {

  const navigate = useNavigate();


  const handleSubmit = async(e) => {
    e.preventDefault();

    const businessName = e.target.businessName.value;
    const name = e.target.name.value;
    const email = e.target.email.value;
    const phone = e.target.phone.value;
    const address = e.target.address.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    axios.post('http://localhost:3000/api/auth/foodpartner/register', {
      fullName: businessName,
      contactname: name,
      email,
      phone,
      address,
      password
    }, {
      withCredentials: true
    })
    .then(response => {
      console.log(response.data);
      navigate('/create-food');
    })
    .catch(error => {
      console.error("Registration failed:", error);
      alert("Registration failed");
    });
  };
  return (
    <div className="partner-page">
      <h1>FOOD REELS</h1>
      <div className="form-container">
        <h2>Food Partner Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="businessName">Business Name</label>
          <input type="text" id="businessName" name="businessName" required />
        </div>
        <div className="form-group">
          <label htmlFor="name">Contact Name</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input type="tel" id="phone" name="phone" required />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input type="text" id="address" name="address" required />
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
        <a href="/food-partner/login">Already have an account? Login</a>
      </div>
    </div>
    </div>
  );
};

export default FoodPartnerRegister;