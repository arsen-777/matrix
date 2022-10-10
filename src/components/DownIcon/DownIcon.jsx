import React from 'react';
import styles from '../DownIcon/DownIcon.module.scss';
const DownIcon = ({ Comp }) => {
  return (
    <div className={styles.iconCont}>
      <Comp />
    </div>
  );
};

export default DownIcon;
