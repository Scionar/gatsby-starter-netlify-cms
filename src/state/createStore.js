import { createStore as reduxCreateStore } from 'redux';

const reducer = (state, action) => {
  if (action.type === `SET_EPISODE`) {
    return {
      ...state,
      player: {
        ...state.player,
        season: action.season,
        episode: action.episode,
        title: action.title,
        episodeUrl: action.episodeUrl
      }
    };
  }
  if (action.type === `PLAY`) {
    return {
      ...state,
      player: {
        ...state.player,
        started: true,
        paused: false
      }
    };
  }
  if (action.type === `PAUSE`) {
    return {
      ...state,
      player: {
        ...state.player,
        started: true,
        paused: true
      }
    };
  }
  return state;
};

const initialState = {
  player: {
    started: false,
    paused: false,
    season: undefined,
    episode: undefined,
    title: undefined,
    episodeUrl: undefined
  }
};

const createStore = () =>
  reduxCreateStore(
    reducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
export default createStore;
