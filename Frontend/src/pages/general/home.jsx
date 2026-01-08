import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/main.css';

const Home = () => {
  const reels = [
    {
      id: 1,
      title: "Welcome to FoodReels",
      description: "Discover amazing food experiences and connect with local food partners. Share your culinary journey through reels and delicious discoveries.",
      background: "url('https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80')",
      cta: { text: "Get Started", link: "/register" }
    },
    {
      id: 2,
      title: "Explore Local Flavors",
      description: "Find the best food partners in your area. From street food to fine dining, discover new tastes every day.",
      background: "url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80')",
      cta: { text: "Browse Food", link: "/user/login" }
    },
    {
      id: 3,
      title: "Become a Food Partner",
      description: "Share your culinary creations with the world. Join our community of food enthusiasts and entrepreneurs.",
      background: "url('https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80')",
      cta: { text: "Join Now", link: "/food-partner/register" }
    },
    {
      id: 4,
      title: "Create Your First Reel",
      description: "Capture your food moments and share them with the community. Inspire others with your delicious discoveries.",
      background: "url('https://images.unsplash.com/photo-1551892376-2c0ed6f3e9f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80')",
      cta: { text: "Start Creating", link: "/create-food" }
    }
  ];

  return (
    <div className="reel-container">
      {reels.map((reel) => (
        <div key={reel.id} className="reel-item" style={{ backgroundImage: reel.background }}>
          <div className="reel-overlay">
            <div className="reel-content">
              <h1 className="reel-title">{reel.title}</h1>
              <p className="reel-description">{reel.description}</p>
              <Link to={reel.cta.link} className="btn btn-primary">{reel.cta.text}</Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;