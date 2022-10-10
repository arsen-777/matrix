import React from 'react';
import { Line } from 'react-chartjs-2';
import styles from '../MediaStaats/MediaStaats.module.scss';
import { Chart as ChartJS } from 'chart.js/auto';

const MediaStaats = () => {
  const data = {
    labels: ['', '', '', '', '', '', ''],
    datasets: [
      {
        label: 'Clicks',
        data: [18, 58, 18, -40, -30, 30, 55],
        backgroundColor: '#fbcf71',
        borderColor: '#fbcf71',
        tension: 0.4,
        borderWidth: 2,
      },
      {
        label: 'Page View',
        data: [-30, 25, 58, 18, -40, -30, 20],
        backgroundColor: '#1f7bb6',
        borderColor: '#1f7bb6',
        tension: 0.4,
        borderWidth: 2,
      },
      {
        label: 'Sign ups',
        data: [40, 55, 0, -45, -20, 40, 55],
        backgroundColor: '#1abc9c',
        borderColor: '#1abc9c',
        tension: 0.4,
        borderWidth: 2,
      },
    ],
  };
  const options = {
    plugins: {
      legend: {
        position: 'bottom',
        align: 'end',
        labels: {
          color: '#C7C7C7',
          boxWidth: 10,
          boxHeight: 10,
        },
      },
    },
  };
  return (
    <div className={styles.line}>
      <Line data={data} options={options} />
    </div>
  );
};

export default MediaStaats;
