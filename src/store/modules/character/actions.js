import * as Types from './types';

export function loadCharacterRequest(id) {
  return {
    type: Types.LOAD_REQUEST,
    id,
  };
}

export function loadCharacterSuccess(character) {
  return {
    type: Types.LOAD_SUCCESS,
    character,
  };
}

export function loadCharacterFinally(character) {
  return {
    type: Types.LOAD_FINALLY,
    character,
  };
}
