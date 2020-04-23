import {
  FETCH_GAMES_SUCCESS,
  SET_CURRENT_CATEGORY,
} from './actions';

const initialState = {
  categories: [],
  games: [],
  currentCategory: 0,
};

export function gamesReducer(state = initialState, action = {}) {
  const { type, payload } = action;

  switch (type) {
    case FETCH_GAMES_SUCCESS: {
      const { games, categories } = payload;

      return {
        ...state,
        games,
        categories,
      };
    }

    case SET_CURRENT_CATEGORY: {
      const { currentCategory } = payload;

      return {
        ...state,
        currentCategory,
      };
    }

    default:
      return state;
  }
}