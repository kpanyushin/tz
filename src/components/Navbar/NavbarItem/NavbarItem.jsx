import PropTypes from 'prop-types';
import classes from 'classnames';
import React from 'react';

import s from './NavbarItem.module.scss';

const NavbarItem = ({
  className,
  id,
  nameKey,
  isActive,
  count,
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
      <div>{nameKey}</div>
      {count && <div>{count}</div>}
    </li>
  );
};

NavbarItem.propTypes = {
  className: PropTypes.string,
  id: PropTypes.number,
  count: PropTypes.number,
  isActive: PropTypes.bool,
  nameKey: PropTypes.string,
  onClick: PropTypes.func,
};

export default React.memo(NavbarItem);
