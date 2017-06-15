export const CHANGE_HEIGHT = 'CHANGE_HEIGHT';
export const CHANGE_WIDTH = 'CHANGE_WIDTH';
export const START_GAME = 'START_GAME';
export const PAUSE_GAME = 'PAUSE_GAME';
export const RESET_GAME = 'RESET_GAME';
export const STEP_GAME = 'STEP_GAME';
export const TOGGLE_CELL = 'TOGGLE_CELL';
export const CHANGE_SPEED = 'CHANGE_SPEED';
export const SET_RANDOM = 'SET_RANDOM';

export const setRandom = () => ({
  type: SET_RANDOM,
})

export const changeSpeed = (duration) => ({
  type: CHANGE_SPEED,
  duration,
})

export const changeHeight = (height) => ({
  type: CHANGE_HEIGHT,
  height,
})

export const changeWidth = (width) => ({
  type: CHANGE_WIDTH,
  width,
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

export const stepGame = () => ({
  type: STEP_GAME,
})

export const toggleCell = (id) => ({
  type: TOGGLE_CELL,
  id,
})
