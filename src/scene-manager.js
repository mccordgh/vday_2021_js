import {
  Actors, GameStates, SceneNames, ScenePositions,
} from './constants';

const scenes = {
  [SceneNames.NssLunchRoom]: {
    background: 'nss_lunchroom.png',
    actors: [
      { name: Actors.Matt, position: ScenePositions.Right, asset: 'small_water_mccordinator_matt.jpeg' },
    ],
    text: [
      'Hey there...',
      'Want to go get lunch somewhere?',
      'Let\'s get outta here!',
    ],
    sceneFlow: [
      GameStates.LoadingScene,
      GameStates.RollingOutText,
      GameStates.WaitingForClick,
      GameStates.RollingOutText,
      GameStates.WaitingForClick,
      GameStates.RollingOutText,
      GameStates.WaitingForClick,
      GameStates.NextScene,
    ],
    nextScene: SceneNames.OldNssParkingLot,
  },

  [SceneNames.OldNssParkingLot]: {
    background: 'old_nss_parking_lot.png',
    actors: [
      { name: Actors.Matt, position: ScenePositions.Left, asset: 'small_water_mccordinator_matt.jpeg' },
      { name: Actors.Charlie, position: ScenePositions.Center, asset: 'charlie.jpg' },
    ],
    text: [
      'Hey, it\'s a nice day!',
      'You want to play, Charlie?',
      'Woof!',
    ],
    sceneFlow: [
      GameStates.LoadingScene,
      GameStates.RollingOutText,
      GameStates.WaitingForClick,
      GameStates.RollingOutText,
      GameStates.WaitingForClick,
      GameStates.RollingOutText,
      GameStates.WaitingForClick,
      GameStates.Test,
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
