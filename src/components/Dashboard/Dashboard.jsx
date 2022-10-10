import React from 'react';
import styles from '../Dashboard/Dashboard.module.scss';
import { ReactComponent as Right } from '../../assets/images/chevronRight.svg';
import { ReactComponent as Heart } from '../../assets/images/heart.svg';

const Dashboard = () => {
  return (
    <div className={styles.dashboardContainer}>
      <div className={styles.dashboard}>
        <div className={styles.rightArrow}>
          <Right fill="white" />
        </div>
        <p>Dashboard</p>
      </div>
      <div className={styles.favorites}>
        <div className={styles.heartIcon}>
          <Heart fill="grey" />
        </div>
        <p>ADD THIS PAGE TO FAVORITES</p>
      </div>
    </div>
  );
};

export default Dashboard;
