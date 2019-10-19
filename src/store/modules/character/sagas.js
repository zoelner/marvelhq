import { call, select, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import * as Types from './types';
import { api, params } from '../../../services/api';
import { loadCharacterSuccess, loadCharacterFinally } from './actions';
import history from '../../../services/history';
import { parseCharacter, parseSeries } from '../../../utils';

function* loadCharacter({ id }) {
  const characterExists = yield select(state =>
    state.character.data.find(m => m.id === id)
  );

  if (characterExists) {
    history.pushState(`/character/${id}`);
    return;
  }

  try {
    const [user, series] = yield all([
      call(api.get, `/characters/${id}`, { params }),
      call(api.get, `/characters/${id}/series`, { params }),
    ]);

    const data = {
      ...parseCharacter(user.data.data.results[0]),
      series: series.data.data.results.map(parseSeries),
    };

    yield put(loadCharacterSuccess(data));
  } catch (e) {
    toast.error('Oopps... Alguma coisa deu errado.');
  }

  yield put(loadCharacterFinally());
}

export default all([takeLatest(Types.LOAD_REQUEST, loadCharacter)]);
