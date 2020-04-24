import classes from 'classnames';
import PropTypes from 'prop-types';
import React, { useCallback } from 'react';

import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import { SET_CATEGORY_FAVOURITE } from '../../redux/games/actions';
import {
  gamesSelector,
  categoriesSelector,
  currentCategorySelector,
} from '../../redux/games/selectors';

import Game from './Game';

import s from './GamesList.module.scss';

const GamesList = ({ className }) => {
  const { games } = useSelector(gamesSelector, shallowEqual);
  const { categories } = useSelector(categoriesSelector, shallowEqual);
  const { currentCategory } = useSelector(currentCategorySelector);
  const dispatch = useDispatch();
  const handleFavouriteItemClick = useCallback(
    (id) => {
      dispatch({
        type: SET_CATEGORY_FAVOURITE,
        payload: { id },
      });
    },
    [dispatch],
  );

  if (!categories.length || !games.length) return (
    <div className={s.preloader}>Loading...</div>
  );

  const { games: categoryGames } = categories.find(
    ({ id }) => id === currentCategory
  ) || {};
  const largeIconGames = categoryGames.filter(game => game.top);
  const smallIconGames = categoryGames.filter(game => !game.top);

  return (
    <div className={classes(className, s.root)}>
      <div className={s.largeIconGames}>
        {largeIconGames.map(({ id }) => (
          <Game
            className={s.largeGame}
            top
            id={id}
            key={id}
            onFavouriteClick={handleFavouriteItemClick}
          />
        ))}
      </div>
      <div className={s.smallIconGames}>
        {smallIconGames.map(({ id }) => (
          <Game
            className={s.smallGame}
            key={id}
            id={id}
            top={false}
            onFavouriteClick={handleFavouriteItemClick}
          />
        ))}
      </div>
    </div>
  );
};

GamesList.propTypes = {
  className: PropTypes.string,
};

export default GamesList;
