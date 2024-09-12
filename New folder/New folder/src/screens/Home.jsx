import React from 'react';
import styles from './Home.module.css';
import ResponsiveAppBar from './Navbar';

const Home = () => {
  return (
    <div className={styles.container}>
          <ResponsiveAppBar/>
      <h1>Home Page</h1>
    </div>
  );
};

export default Home;