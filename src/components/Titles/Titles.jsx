import React from 'react';
import styles from '../Titles/Titles.module.scss';
import Title from '../Title/Title';
import { ReactComponent as List } from '../../assets/images/list.svg';

const titles = [
  {
    id: 'ID',
    userName: 'Username',
    profit: 'Profit($)',
    commission: 'Commission($)',
    view: 'View',
  },
  {
    id: 'ID',
    userName: 'Username',
    profit: 'Profit($)',
    commission: 'Commission($)',
    view: 'View',
  },
  {
    id: 'ID',
    userName: 'Username',
    profit: 'Profit($)',
    commission: 'Commission($)',
    view: 'View',
  },
];

const users = [
  {
    id: '1007',
    userName: 'Simona',
    age: 55,
    Icon: List,
  },
  {
    id: '1008',
    userName: 'Adelina',
    age: 45,
    Icon: List,
  },
  {
    id: '1009',
    userName: 'Adam',
    age: 35,
    Icon: List,
  },
  {
    id: '1010',
    userName: 'John',
    age: 25,
    Icon: List,
  },
  {
    id: '1011',
    userName: 'Garry',
    age: 15,
    Icon: List,
  },
];

const Titles = () => {
  return (
    <div className={styles.titles}>
      {titles.map((title) => (
        <Title {...title} />
      ))}
    </div>
  );
};

export default Titles;
