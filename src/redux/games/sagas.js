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
    const { games, categories: fetchedCategories } = yield call(fetchGames, 1000);
    const favouriteCategory = {
      id: 999,
      games: [],
      withCounter: true,
      nameKey: 'Избранное',
    };
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
