import { TOGGLE_LOADER, CHANGE_BACKGROUND_COLOR } from './types';

const initialState = {
  isLoader: false,
  backgroundColor: '#fff'
};

export default function general(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_LOADER:
      return {
        ...state,
        isLoader: !state.isLoader,
      };
    case CHANGE_BACKGROUND_COLOR:
      return {
        ...state,
        backgroundColor: action.backgroundColor,
      };
    default:
      return state;
  }
}
