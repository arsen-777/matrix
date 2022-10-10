import React from 'react';
import styles from '../Title/Title.module.scss';
const Title = ({ id, userName, profit, commission, view }) => {
  return (
    <div className={styles.title}>
      <p>{id}</p>
      <p>{userName}</p>
      <p>{profit}</p>
      <p>{commission}</p>
      <p>{view}</p>
    </div>
  );
};

export default Title;
