import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { FETCH_GAMES_REQUEST } from '../../redux/games/actions';

import Navbar from '../Navbar';
import GamesList from '../GamesList';

import s from './App.module.scss';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = () => dispatch({ type: FETCH_GAMES_REQUEST });

    fetchData();
  }, [dispatch]);

  return (
    <div className={s.root}>
      <Navbar  className={s.navbar} />
      <GamesList className={s.games} />
    </div>
  );
};

export default App;
