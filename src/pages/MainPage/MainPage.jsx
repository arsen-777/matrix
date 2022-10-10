import React from 'react';
import styles from '../MainPage/MainPage.module.scss';

import Main from '../../components/Main';
import SideBar from '../../components/SideBar/';

export const MainPage = () => {
  return (
    <div className={styles.mainContainer}>
      <SideBar />
      <Main />
    </div>
  );
};
