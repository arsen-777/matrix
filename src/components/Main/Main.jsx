import React from 'react';
import Dashboard from '../Dashboard';
import Header from '../Header';
import styles from '../Main/Main.module.scss';
import Statitstics from '../Statistics/Statistics';
import Titles from '../Titles';
import Tsp from '../TopSignUpPenging';
import TotalAMounts from '../TotalAmounts';
import Users from '../Users';
const Main = () => {
  return (
    <div className={styles.mainSection}>
      <Header />
      <Dashboard />
      <TotalAMounts />
      <Statitstics />
      <Tsp />
      <Titles />
      <div className={styles.usersContainer}>
        <Users />
        <Users />
        <Users />
      </div>
    </div>
  );
};

export default Main;
