import {
  CHANGE_WIDTH,
  CHANGE_HEIGHT,
  START_GAME,
  PAUSE_GAME,
  RESET_GAME,
  STEP_GAME,
} from '../actions';

const pauseGame = (state) => {
  state.running = false;
  return {...state}
}

const game = (state, action) => {
  switch (action.type) {
    case START_GAME:
      state.running = true;
      return {...state};
    case PAUSE_GAME:
      return pauseGame({...state});
    case RESET_GAME:
      state.gen = 0;
      return pauseGame({...state});
    case STEP_GAME:
      state.gen ++;
      return pauseGame({...state});
    case CHANGE_WIDTH:
      state.width = action.width;
      return {...state};
    case CHANGE_HEIGHT:
      state.height = action.height;
      return {...state};
    default:
      return {...state};
  }
}

export default game;
