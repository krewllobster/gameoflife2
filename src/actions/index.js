export const CHANGE_HEIGHT = 'CHANGE_HEIGHT';
export const CHANGE_WIDTH = 'CHANGE_WIDTH';
export const START_GAME = 'START_GAME';
export const PAUSE_GAME = 'PAUSE_GAME';
export const RESET_GAME = 'RESET_GAME';
export const STEP_GAME = 'STEP_GAME';

export const changeHeight = (newHeight) => ({
  type: CHANGE_HEIGHT,
  newHeight,
})

export const changeWidth = (newWidth) => ({
  type: CHANGE_WIDTH,
  newWidth,
})

export const start = () => ({
  type: START_GAME,
})

export const pause = () => ({
  type: PAUSE_GAME,
})

export const reset = () => ({
  type: RESET_GAME,
})

export const step = () => ({
  type: STEP_GAME,
})
