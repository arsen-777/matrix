import React from 'react';
import styles from '../SideBar/SiderBar.module.scss';
import { upIcons, downIcons } from '../../data/sideBar/siderBarData';
import UpIcon from '../UpIcon';
import DownIcon from '../DownIcon';
const SideBar = () => {
  return (
    <div className={styles.sideBar}>
      <div className={styles.headIcon}>
        <div className={styles.topIcon}>b</div>
        <div className={styles.yellow}></div>
      </div>
      <div className={styles.upIcons}>
        {upIcons.map((c, i) => (
          <UpIcon key={i} Comp={c} />
        ))}
      </div>
      <div className={styles.downIcons}>
        {downIcons.map((c, i) => (
          <DownIcon key={i} Comp={c} />
        ))}
        <div>#171717</div>
      </div>
    </div>
  );
};

export default SideBar;
