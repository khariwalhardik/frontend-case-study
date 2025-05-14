import React from 'react';
import ProfileList from '../components/ProfileList';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <h1>🌐 Profile Explorer</h1>
        <p>Browse and explore people and their locations interactively.</p>
      </header>

      <main className={styles.main}>
        <ProfileList />
      </main>
    </div>
  );
};

export default Home;
