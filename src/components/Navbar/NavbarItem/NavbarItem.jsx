import PropTypes from 'prop-types';
import classes from 'classnames';
import React from 'react';

import s from './NavbarItem.module.scss';

const NavbarItem = ({
  className,
  id,
  title,
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
      <div>{title}</div>
      {count && <div>{count}</div>}
    </li>
  );
};

NavbarItem.propTypes = {
  className: PropTypes.string,
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  count: PropTypes.number,
  isActive: PropTypes.bool,
  title: PropTypes.string,
  onClick: PropTypes.func,
};

export default React.memo(NavbarItem);
