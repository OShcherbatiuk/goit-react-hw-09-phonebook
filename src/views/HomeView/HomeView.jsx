import React from 'react';
import phoneBook from './phoneBook.jpg';
import s from './HomeView.module.css';

const HomeView = () => (
  <div className={s.section}>
    <img
      className={s.image}
      src={phoneBook}
      alt="phonebook"
      width="300"
      height="300"
    />
    <h1 className={s.title}>
      This is your organizer App,
      <br /> please login or signup ↗️
    </h1>
  </div>
);

export default HomeView;
