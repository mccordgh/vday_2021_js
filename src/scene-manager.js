import {
  Actors, GameStates, SceneNames, ScenePositions,
} from './constants';

const scenes = {
  [SceneNames.NssLunchRoom]: {
    background: 'nss_lunchroom.png',
    actors: [
      { name: Actors.Matt, position: ScenePositions.Right, asset: 'placeholder.png' },
    ],
    text: [
      'Hello world testing testing lorem ipsum ipsum ipsum',
    ],
    sceneFlow: [
      GameStates.LoadingScene,
      GameStates.RollingOutText,
      GameStates.WaitingForClick,
      GameStates.Next,
    ],
  },
};

export const findScene = (name) => {
  if (!scenes[name]) {
    throw new Error(`No scene with name: ${name} exists!`);
  }

  return scenes[name];
};

export const something = () => {};
