import React from 'react';
import classes from 'classnames';
import PropTypes from 'prop-types';

import s from './Game.module.scss';

const GamesList = ({ className, id, name, img, top }) => {
  const handleError = (event)  => {
    const folder = top ? 'large' : 'small';
    event.target.src = `assets/placeholder/${folder}/placeholder.jpg`;
  };

  return (
    <div className={classes(className, s.root)}>
      <img src={`assets${top ? img.large : img.small}`} onError={handleError} alt={name} />
    </div>
  );
}

GamesList.propTypes = {
  className: PropTypes.string,
  id: PropTypes.number,
  name: PropTypes.string,
  img: PropTypes.shape({
    small: PropTypes.string,
    large: PropTypes.string,
  }),
};

export default GamesList;
