import { take, fork } from 'redux-saga/effects';
import { FETCH_LANGUAGES_ACTION } from '../actions';
import { fetchLanguagesActionParams } from '../_types';
import { fetchLanguagesWorkerSaga } from './fetch-languages-worker-saga';

export const FETCH_LANGUAGES_WATCHER_SAGA_NAME =
  'FETCH_LANGUAGES_WATCHER_SAGA_NAME';

export function* fetchLanguagesWatcherSaga() {
  while (true) {
    const { payload }: { payload: fetchLanguagesActionParams } = yield take(
      FETCH_LANGUAGES_ACTION,
    );

    yield fork(fetchLanguagesWorkerSaga, payload);
  }
}
