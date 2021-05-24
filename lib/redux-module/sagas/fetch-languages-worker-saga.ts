import { call, put } from 'redux-saga/effects';
import { fetchLanguagesActionParams } from '../_types';
import { setLanguagesListAction } from '../actions';

export const FETCH_LANGUAGES_WATCHER_SAGA_NAME =
  'FETCH_LANGUAGES_WATCHER_SAGA_NAME';

export function* fetchLanguagesWorkerSaga({
  languagesRequest,
}: fetchLanguagesActionParams) {
  try {
    const { data, error, errorText } = yield call(languagesRequest);

    if (error || !data.languages) {
      throw new Error(errorText);
    }

    yield put(setLanguagesListAction(data.languages));
  } catch (error) {
    console.error(
      'fetchLanguagesWorkerSaga gets an error',
      fetchLanguagesWorkerSaga,
    );
  }
}
