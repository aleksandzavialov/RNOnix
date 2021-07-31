import { TOGGLE_LOADER, CHANGE_BACKGROUND_COLOR } from './types';

export const toggleLoader = () => ({ type: TOGGLE_LOADER });

export const changeBackgroundColor = (backgroundColor) => ({
  type: CHANGE_BACKGROUND_COLOR, backgroundColor
});
