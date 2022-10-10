import React from 'react';
import styles from '../UpIcon/UpIcon.module.scss';
const UpIcon = ({ Comp }) => {
  return (
    <div className={styles.iconCont}>
      <Comp />
    </div>
  );
};

export default UpIcon;
