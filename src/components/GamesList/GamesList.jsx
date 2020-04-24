import React from 'react';
import classes from 'classnames';
import PropTypes from 'prop-types';
import { useSelector, shallowEqual } from 'react-redux';

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
