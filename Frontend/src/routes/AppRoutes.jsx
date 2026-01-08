import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserRegister from '../pages/UserRegister';
import ChooseRegister from '../pages/ChooseRegister';
import UserLogin from '../pages/UserLogin';
import FoodPartnerRegister from '../pages/FoodPartnerRegister';
import FoodPartnerLogin from '../pages/FoodPartnerLogin';
import Home from '../pages/general/home';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>             
        <Route path="/register" element={<div className="centered-page"><ChooseRegister /></div>} />         
        <Route path="/user/register" element={<div className="centered-page"><UserRegister /></div>} />
        <Route path="/user/login" element={<div className="centered-page"><UserLogin /></div>} />
        <Route path="/food-partner/register" element={<div className="centered-page"><FoodPartnerRegister /></div>} />
        <Route path="/food-partner/login" element={<div className="centered-page"><FoodPartnerLogin /></div>} />
        <Route path="/" element={<Home/>} />
        <Route path="/create-food" element={<div>Create Food</div>} />
        </Routes>
    </Router>
  )
}

export default AppRoutes