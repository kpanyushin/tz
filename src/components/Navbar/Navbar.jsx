import classes from 'classnames';
import PropTypes from 'prop-types';
import React, { useCallback } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import { SET_CURRENT_CATEGORY } from '../../redux/games/actions';

import NavbarItem from './NavbarItem';

import s from './Navbar.module.scss';

const Navbar = ({ className }) => {
  const dispatch = useDispatch();
  const { categories, currentCategory } = useSelector(
    ({
      categories,
      currentCategory,
    }) => ({
      categories,
      currentCategory,
    }),
    shallowEqual
  );
  const handleItemClick = useCallback(
    (id) => {
      dispatch({
        type: SET_CURRENT_CATEGORY,
        payload: { currentCategory: id },
      });
    },
    [dispatch],
  );

  return (
    <nav className={classes(className, s.root)}>
      <ul>
        {categories.map(({ id, nameKey, withCounter, games }) => (
          <NavbarItem
            className={s.item}
            key={id}
            id={id}
            nameKey={nameKey}
            isActive={id === currentCategory}
            onClick={handleItemClick}
            count={withCounter ? games.length : null}
          />
        ))}
      </ul>
    </nav>
  );
};

Navbar.propTypes = {
  className: PropTypes.string,
};

export default Navbar;
