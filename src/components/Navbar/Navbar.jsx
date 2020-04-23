import classes from 'classnames';
import PropTypes from 'prop-types';
import React, { useState, useCallback } from 'react';

import NavbarItem from './NavbarItem';

import s from './Navbar.module.scss';

const Navbar = ({ className, categories }) => {
  const [currentId, setCurrentId] = useState(0);
  const handleItemClick = useCallback(
    id => {
      setCurrentId(id);
    },
    [setCurrentId],
  );

  return (
    <nav className={classes(className, s.root)}>
      <ul>
        {categories.map(({ id, nameKey }) => (
          <NavbarItem
            key={id}
            id={id}
            nameKey={nameKey}
            isActive={id === currentId}
            onClick={handleItemClick}
          />
        ))}
      </ul>
    </nav>
  );
};

Navbar.propTypes = {
  className: PropTypes.string,
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      nameKey: PropTypes.string,
      games: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        top: PropTypes.bool,
      })),
    }),
  ),
}

export default Navbar;
