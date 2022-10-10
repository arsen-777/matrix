import React from 'react';
import styles from '../TotalAmounts/TotalAmounts.module.scss';
import { totalAmounts } from '../../data/TotalAmount/totalAmount';
import AmountItem from '../AmountItem';
const TotalAMounts = () => {
  return (
    <div className={styles.totalAmountsContainer}>
      {totalAmounts.map((amount) => {
        return <AmountItem key={amount.id} Icon={amount.icon} {...amount} />;
      })}
    </div>
  );
};

export default TotalAMounts;
