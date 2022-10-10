import React from 'react';
import styles from '../TopSignUpPenging/Tsp.module.scss';
const Tsp = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.top}>Top Affiliates</div>
      <div>Signups</div>
      <div>Pending Commissions</div>
    </div>
  );
};

export default Tsp;
