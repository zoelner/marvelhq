import produce from 'immer';
import * as Types from './types';

const INITIAL_STATE = {
  data: [],
  loading: false,
};

export default function movie(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.LOAD_REQUEST:
      return produce(state, draft => {
        draft.loading = true;
      });

    case Types.LOAD_SUCCESS:
      return produce(state, draft => {
        const { character } = action;
        draft.data.push(character);
        draft.loading = false;
      });

    case Types.LOAD_FINALLY:
      return produce(state, draft => {
        draft.loading = false;
      });

    default:
      return state;
  }
}
