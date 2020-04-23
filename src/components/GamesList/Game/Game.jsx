import React from 'react';
import classes from 'classnames';
import PropTypes from 'prop-types';

import s from './Game.module.scss';

const Game = ({
  className,
  id,
  name,
  img,
  top,
  favourite,
  onFavouriteClick,
}) => {
  const favouriteActive = 'icon-favorites-active.svg';
  const favoriteNoActive = 'icon-favorites-noactive.svg';
  const favicon = `assets/icons/${favourite ? favouriteActive : favoriteNoActive}`;
  const handleFavoutiteClick = () => {
    onFavouriteClick(id);
  };
  const handleError = (event)  => {
    const folder = top ? 'large' : 'small';
    event.target.src = `assets/placeholder/${folder}/placeholder.jpg`;
  };

  return (
    <div className={classes(className, s.root)}>
      <img src={`assets${top ? img.large : img.small}`} onError={handleError} alt={name} />
      <div className={s.title}>{name}</div>
      <img
        className={s.icon}
        src={favicon}
        alt="favourite"
        onClick={handleFavoutiteClick}
      />
    </div>
  );
}

Game.propTypes = {
  className: PropTypes.string,
  top: PropTypes.bool,
  id: PropTypes.number,
  name: PropTypes.string,
  img: PropTypes.shape({
    small: PropTypes.string,
    large: PropTypes.string,
  }),
  favorite: PropTypes.bool,
  onFavouriteClick: PropTypes.func,
};

export default Game;
