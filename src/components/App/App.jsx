import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Navbar from '../Navbar';

import s from './App.module.scss';

const App = () => {
  const dispatch = useDispatch();
  const { games, categories } = useSelector(
    ({ games, categories }) => ({ games, categories })
  );

  useEffect(() => {
    const fetchData = () => dispatch({ type: 'FETCH_GAMES_REQUEST' });

    fetchData();
  }, [dispatch]);

  return (
    <div className={s.root}>
      <Navbar categories={categories} />
    </div>
  );
};

export default App;
