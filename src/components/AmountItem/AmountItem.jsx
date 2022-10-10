import React from 'react';
import styles from '../AmountItem/AmountItem.module.scss';
import { ReactComponent as Dollar } from '../../assets/images/dollar.svg';

const AmountItem = ({ id, amount, Icon, description, color }) => {
  return (
    <div className={styles.amountBlock}>
      <div className={styles.amount}>
        {id !== 1 && <Dollar fill={color} />}
        <span style={{ color: color, fontSize: '50px' }}>{amount}</span>
      </div>
      <div className={styles.field}>
        <Icon fill={color} />
        <span>{description}</span>
      </div>
    </div>
  );
};

export default AmountItem;
