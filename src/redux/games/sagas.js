import { takeLatest, all, put, call } from 'redux-saga/effects';

import {
  fetchGames
} from '../../api';

import {
  FETCH_GAMES_REQUEST,
  FETCH_GAMES_SUCCESS,
  SET_CURRENT_CATEGORY,
} from './actions';

export function* fetchContacts() {
  try {
    const {
      games: fetchedGames,
      categories: fetchedCategories,
    } = yield call(fetchGames, 1000);
    const favouriteIds = JSON.parse(localStorage.getItem('favourite')) || [];
    const favouriteCategory = {
      games: [...favouriteIds.map(_id => ({
        id: _id,
        top: true,
        favourite: true,
      }))],
      id: 'favourite',
      withCounter: true,
      nameKey: 'Избранное',
    };
    const games = fetchedGames.map((game) => {
      if (favouriteIds.includes(game.id)) {
        return {
          ...game,
          favourite: true,
        };
      }

      return game;
    })
    const categories = [
      ...fetchedCategories.slice(0, 1),
      favouriteCategory,
      ...fetchedCategories.slice(1, fetchedCategories.length)];
    yield put({
      type: FETCH_GAMES_SUCCESS,
      payload: { games, categories },
    });
    yield put({
      type: SET_CURRENT_CATEGORY,
      payload: { currentCategory: 0 },
    });
  } catch (err) {
    console.error(err);
  }
}

export default function* () {
  yield all([
    takeLatest(FETCH_GAMES_REQUEST, fetchContacts),
  ]);
}
