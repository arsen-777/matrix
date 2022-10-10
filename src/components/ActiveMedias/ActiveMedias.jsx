import React from 'react';
import styles from '../ActiveMedias/ActiveMedias.module.scss';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

const ActiveMedias = () => {
  const data = {
    datasets: [
      {
        rotation: 180,
        borderWidth: 0,
        data: [200, 65, 22],
        backgroundColor: ['#FBCF71', '#1F7BB6', '#01AAAA'],
      },
    ],
  };
  const options = {
    responsive: true,

    plugins: {
      title: {
        display: true,
        text: 'Active Medias',
        align: 'start',
        color: '#FFF',
        font: {
          size: 24,
        },
      },
    },
  };
  return (
    <div className={styles.doughnutContainer}>
      <div className={styles.activeMedias}>
        <Doughnut data={data} options={options} />
        <p>50</p>
      </div>
      <div className={styles.mediaInfo}>
        <div className={styles.ctr}>
          <p>CTR</p>
          <p>25%</p>
        </div>
        <div className={styles.wrapper}>
          <div>
            <div className={styles.yellow}>
              <div></div>
              <p>Total Views</p>
            </div>
            <div className={styles.blue}>
              <div></div>
              <p>Total Clicks</p>
            </div>
            <div className={styles.green}>
              <div></div>
              <p>Signups</p>
            </div>
          </div>
          <div className={styles.numbers}>
            <p>200</p>
            <p>65</p>
            <p>22</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActiveMedias;
