import { FETCH_GAMES_SUCCESS } from './actions';

const initialState = {
  categories: [],
  games: [],
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

    default:
      return state;
  }
}