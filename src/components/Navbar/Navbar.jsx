import React from 'react';
import classes from 'classnames';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { SET_CURRENT_CATEGORY } from '../../redux/games/actions';

import NavbarItem from './NavbarItem';

import s from './Navbar.module.scss';

const Navbar = ({ className, categories, currentCategory }) => {
  const dispatch = useDispatch();
  const handleItemClick = id => dispatch({
    type: SET_CURRENT_CATEGORY,
    payload: { currentCategory: id },
  });

  return (
    <nav className={classes(className, s.root)}>
      <ul>
        {categories.map(({ id, nameKey }) => (
          <NavbarItem
            className={s.item}
            key={id}
            id={id}
            nameKey={nameKey}
            isActive={id === currentCategory}
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
