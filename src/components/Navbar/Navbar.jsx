import classes from 'classnames';
import PropTypes from 'prop-types';
import React, { useCallback } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import { SET_CURRENT_CATEGORY } from '../../redux/games/actions';
import {
  categoriesSelector,
  currentCategorySelector,
} from '../../redux/games/selectors';

import NavbarItem from './NavbarItem';

import s from './Navbar.module.scss';

const Navbar = ({ className }) => {
  const dispatch = useDispatch();
  const { categories } = useSelector(categoriesSelector, shallowEqual);
  const { currentCategory } = useSelector(currentCategorySelector);
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
            title={nameKey}
            isActive={id === currentCategory}
            count={withCounter ? games.length : null}
            onClick={handleItemClick}
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
