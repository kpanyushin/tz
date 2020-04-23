import React from 'react';
import classes from 'classnames';
import PropTypes from 'prop-types';

import Game from './Game';

import s from './GamesList.module.scss';

const GamesList = ({ className, games, onFavouriteClick }) => {
  const largeIcons = games.filter(game => game.top);
  const smallIcons = games.filter(game => !game.top);

  return (
    <div className={classes(className, s.root)}>
      <div className={s.largeIcons}>
        {largeIcons.map(({ id, name, img, favourite }) => (
          <Game
            className={s.largeGame}
            top
            key={id}
            id={id}
            img={img}
            name={name}
            favourite={favourite}
            onFavouriteClick={onFavouriteClick}
          />
        ))}
      </div>
      <div className={s.smallIcons}>
        {smallIcons.map(({ id, name, img, favourite }) => (
          <Game
            className={s.smallGame}
            key={id}
            id={id}
            img={img}
            name={name}
            top={false}
            favorite={favourite}
            onFavouriteClick={onFavouriteClick}
          />
        ))}
      </div>
    </div>
  );
};

GamesList.propTypes = {
  className: PropTypes.string,
  games: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      img: PropTypes.shape({
        small: PropTypes.string,
        large: PropTypes.string,
      }),
    }),
  ),
  onFavouriteClick: PropTypes.func,
};

export default GamesList;
