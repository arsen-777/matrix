import React from 'react';
import styles from '../User/User.module.scss';
const User = ({ id, userName, age, Icon }) => {
  return (
    <div className={styles.userContainer}>
      <p>{id}</p>
      <p>{userName}</p>
      <p>{age}</p>
      <p>{userName}</p>
      <Icon />
    </div>
  );
};

export default User;
