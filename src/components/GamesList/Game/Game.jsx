import classes from 'classnames';
import PropTypes from 'prop-types';
import React, { useCallback } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import { SET_CATEGORY_FAVOURITE } from '../../../redux/games/actions';
import { gameSelector } from '../../../redux/games/selectors';

import s from './Game.module.scss';

const Game = ({ className, id, top }) => {
  const { img, name, favourite } = useSelector(
    state => gameSelector(state, id),
    shallowEqual
  );
  const favouriteActive = 'icon-favorites-active.svg';
  const favouriteNoActive = 'icon-favorites-noactive.svg';
  const favoutireSrc = `assets/icons/${favourite ? favouriteActive : favouriteNoActive}`;
  const dispatch = useDispatch();
  const handleFavouriteClick = useCallback(
    () => dispatch({
      type: SET_CATEGORY_FAVOURITE,
      payload: { id },
    }),
    [id, dispatch],
  );
  const handleError = (event)  => {
    const folder = top ? 'large' : 'small';
    event.target.src = `assets/placeholder/${folder}/placeholder.jpg`;
  };

  return (
    <div className={classes(className, s.root)}>
      <img
        alt={name}
        src={`assets${top ? img.large : img.small}`}
        onError={handleError}
      />
      <div className={s.title}>{name}</div>
      <img
        className={s.icon}
        alt="favourite"
        src={favoutireSrc}
        onClick={handleFavouriteClick}
      />
    </div>
  );
}

Game.propTypes = {
  className: PropTypes.string,
  top: PropTypes.bool,
  id: PropTypes.number,
};

export default React.memo(Game);
