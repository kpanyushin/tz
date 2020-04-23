import { takeLatest, all, put, call } from 'redux-saga/effects';

import {
  fetchGames
} from '../../api';

import {
  FETCH_GAMES_REQUEST,
  FETCH_GAMES_SUCCESS,
} from './actions';

export function* fetchContacts() {
  try {
    const { games, categories } = yield call(fetchGames, 1000);
    yield put({
      type: FETCH_GAMES_SUCCESS,
      payload: { games, categories },
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
