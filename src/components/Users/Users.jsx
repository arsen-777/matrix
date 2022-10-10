import React from 'react';
import styles from '../Users/Users.module.scss';
import User from '../User';
import { ReactComponent as List } from '../../assets/images/list.svg';
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
const Users = () => {
  return (
    <div className={styles.usersContainer}>
      {users.map((user) => (
        <User {...user} />
      ))}
    </div>
  );
};

export default Users;
