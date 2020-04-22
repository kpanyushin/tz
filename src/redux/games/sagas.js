import { takeLatest, all, put, call, select } from 'redux-saga/effects';

import {
  fetchGames
} from '../../api';

import {
  FETCH_GAMES_REQUEST,
  FETCH_GAMES_SUCCESS,
} from './actions';

export function* fetchContacts() {
  try {
    const response = yield call(fetchGames);
    const { status, data } = response;

    console.log(status, data);
  } catch (err) {
    console.error(err);
  }
}

export default function* () {
  yield all([
    takeLatest(FETCH_GAMES_REQUEST, fetchContacts),
  ]);
}
