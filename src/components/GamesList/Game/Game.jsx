import React from 'react';
import classes from 'classnames';
import PropTypes from 'prop-types';
import { useSelector, shallowEqual } from 'react-redux';

import { gameSelector } from '../../../redux/games/selectors';

import s from './Game.module.scss';

const Game = ({
  className,
  id,
  top,
  onFavouriteClick,
}) => {
  const { img, name, favourite } = useSelector(
    state => gameSelector(state, id),
    shallowEqual
  );
  const favouriteActive = 'icon-favorites-active.svg';
  const favouriteNoActive = 'icon-favorites-noactive.svg';
  const favoutireSrc = `assets/icons/${favourite ? favouriteActive : favouriteNoActive}`;
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
        alt="favourite"
        src={favoutireSrc}
        onClick={handleFavoutiteClick}
      />
    </div>
  );
}

Game.propTypes = {
  className: PropTypes.string,
  top: PropTypes.bool,
  id: PropTypes.number,
  onFavouriteClick: PropTypes.func,
};

export default React.memo(Game);
