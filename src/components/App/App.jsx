import React, { useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import { FETCH_GAMES_REQUEST } from '../../redux/games/actions';

import Navbar from '../Navbar';
import GamesList from '../GamesList';

import s from './App.module.scss';

const App = () => {
  const dispatch = useDispatch();
  const { games, categories, currentCategory } = useSelector(
    ({
      games,
      categories,
      currentCategory,
    }) => ({
      games,
      categories,
      currentCategory,
    }),
    shallowEqual
  );

  useEffect(() => {
    const fetchData = () => dispatch({ type: FETCH_GAMES_REQUEST });

    fetchData();
  }, [dispatch]);

  if (!categories.length || !games.length) return <div>Loading...</div>;

  const currentGamesIds = categories[currentCategory].games.map(({ id }) => id);
  const currentGames = games.filter(({ id }) => currentGamesIds.includes(id));

  const items = currentGames.map((item) => {
    const { top } = categories[currentCategory].games.find(({ id }) => id === item.id);

    return { ...item, top };
  });

  return (
    <div className={s.root}>
      <Navbar 
        className={s.navbar}
        categories={categories}
        currentCategory={currentCategory}
      />
      <GamesList
        className={s.games}
        games={items}
      />
    </div>
  );
};

export default App;
