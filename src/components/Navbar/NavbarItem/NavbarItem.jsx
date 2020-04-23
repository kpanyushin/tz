import PropTypes from 'prop-types';
import classes from 'classnames';
import React from 'react';

import s from './NavbarItem.module.scss';

const NavbarItem = ({
  className,
  id,
  nameKey,
  isActive,
  onClick,
}) => {
  const handleClick = () => {
    onClick(id);
  };

  return (
    <li
      className={classes(className, s.root, {
        [s['active']]: isActive,
      })}
      onClick={handleClick}
    >
      {nameKey}
    </li>
  );
};

NavbarItem.propTypes = {
  className: PropTypes.string,
  id: PropTypes.number,
  isActive: PropTypes.bool,
  nameKey: PropTypes.string,
  onClick: PropTypes.func,
};

export default NavbarItem;
