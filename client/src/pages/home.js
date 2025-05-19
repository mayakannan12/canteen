import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <nav className="navbar">
        <h2 className="logo">CanteenCravings 🍔</h2>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/menu">Menu</a></li>
          <li><a href="/login">Login</a></li>
        </ul>
      </nav>

      <div className="hero">
        <h1>Welcome to Your College Canteen!</h1>
        <p>Order your favorite meals online & skip the queue. 😋</p>
        <a href="/menu"><button className="order-btn">Order Now</button></a>
      </div>
    </div>
  );
}

export default Home;
