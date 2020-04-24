import {
  FETCH_GAMES_SUCCESS,
  SET_CURRENT_CATEGORY,
  SET_CATEGORY_FAVOURITE,
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

    case SET_CATEGORY_FAVOURITE: {
      const { id } = payload;
      const { games, categories } = state;
      const favouriteIds = JSON.parse(localStorage.getItem('favourite')) || [];
      const newGames = games.map((game) => {
        if (game.id === id) {
          if (game.favourite) {
            localStorage.setItem(
              'favourite',
              JSON.stringify(favouriteIds.filter(_id => _id !== id))
            );
          } else {
            favouriteIds.push(id);
            localStorage.setItem('favourite', JSON.stringify(favouriteIds));
          }
          return {
            ...game,
            favourite: !game.favourite, 
          };
        }

        return game;
      });
      const newCategories = categories.map((category) => {
        if (category.id === 'favourite') {
          return {
            ...category,
            games: newGames
            .filter(game => game.favourite)
            .map(game => ({ id: game.id, top: true }))
          };
        }

        return category;
      });

      return {
        ...state,
        games: newGames,
        categories: newCategories,
      };
    }

    default:
      return state;
  }
}