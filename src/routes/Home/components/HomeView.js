import React from 'react';
import DuckImage from '../assets/Duck.jpg';
import './HomeView.scss';
import './ComicList.scss';
import ComicsList from './ComicList';

export const HomeView = () => (
  <div>
    <ComicsList />
  </div>
);

export default HomeView;
