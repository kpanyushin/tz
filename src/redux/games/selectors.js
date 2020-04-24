import { createSelector } from 'reselect';

const rootSelector = state => state;

export const gamesSelector = createSelector(
  rootSelector,
  ({ games }) => ({ games }),
);

export const categoriesSelector = createSelector(
  rootSelector,
  ({ categories }) => ({ categories }),
);

export const currentCategorySelector = createSelector(
  rootSelector,
  ({ currentCategory }) => ({ currentCategory }),
);

export const gameSelector = createSelector(
  gamesSelector,
  (_, id) => id,
  ({ games }, id) => games.find(_game => _game.id === id),
);
