import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../styles/main.css';

const Home = () => {
  const [foodItems, setFoodItems] = useState([
    {
      _id: '1',
      name: 'Sample Food 1',
      video: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      description: 'This is a sample food description that should be truncated to two lines maximum to fit the UI properly.'
    },
    {
      _id: '2',
      name: 'Sample Food 2',
      video: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
      description: 'Another sample food item with a longer description to test the truncation feature and ensure it works correctly.'
    },
    {
      _id: '3',
      name: 'Sample Food 3',
      video: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
      description: 'Third sample video for testing the scrolling functionality and UI layout.'
    }
  ]);

  useEffect(() => {
    const fetchFoodItems = async () => {
      try {
        const response = await axios.get('/api/food/');
        if (response.data.foodItems.length > 0) {
          setFoodItems(response.data.foodItems);
        }
      } catch (error) {
        console.error('Error fetching food items:', error);
      }
    };

    fetchFoodItems();
  }, []);

  return (
    <div className="reel-container">
      {foodItems.map((item) => (
        <div key={item._id} className="reel-item">
          <video
            className="reel-video"
            src={item.video}
            autoPlay
            muted
            loop
            playsInline
          />
          <div className="reel-overlay">
            <div className="reel-content">
              <p className="reel-description">{item.description}</p>
              <button className="visit-store-btn">Visit Store</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;