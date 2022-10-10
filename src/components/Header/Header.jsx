import React from 'react';
import styles from '../Header/Header.module.scss';
import caret from '../../assets/images/caret.svg';
import flag from '../../assets/images/united.svg';
import bars from '../../assets/images/bars.svg';
import { ReactComponent as UserImg } from '../../assets/images/user1.svg';
const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.nothing}></div>
      <div className={styles.menuIcon}>
        <img src={bars} alt="" />
      </div>
      <div className={styles.userInfoBlock}>
        <div className={styles.flagBlock}>
          <img src={flag} alt="" />
          <span>EN</span>
        </div>
        <div className={styles.user}>
          <div className={styles.userImg}>
            <UserImg />
          </div>
          <div className={styles.userInfo}>
            <span>Hello, Max!</span>
            <p>Last login: Thu Mar 20 2014</p>
          </div>
          <div className={styles.arrow}>
            <img src={caret} alt="" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
