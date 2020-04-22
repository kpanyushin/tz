import { all } from 'redux-saga/effects';

import games from './games/sagas';

export function* rootSaga() {
  yield all([games()]);
}
