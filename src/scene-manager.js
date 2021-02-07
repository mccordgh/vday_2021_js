import {
  Actors, GameStates, SceneNames, ScenePositions,
} from './constants';

const scenes = {
  [SceneNames.NssLunchRoom]: {
    background: 'nss_lunchroom.png',
    actors: [
      {
        name: Actors.Matt, position: ScenePositions.Right, asset: 'small_water_mccordinator_matt.jpeg', appearsAtStart: true,
      },
    ],
    text: [
      'Matt: Hey there... :)',
      'Matt: Want to go get lunch somewhere?',
      'Matt: Let\'s get outta here!',
    ],
    sceneFlow: [
      { state: GameStates.LoadingScene },
      { state: GameStates.RollingOutText },
      { state: GameStates.WaitingForClick },
      { state: GameStates.RollingOutText },
      { state: GameStates.SetupChoices, options: { choices: ['Sure, that sounds fun!', 'Yea! Let\'s get Charlie!!'] } },
      { state: GameStates.WaitingForChoice },
      { state: GameStates.RollingOutText },
      { state: GameStates.WaitingForClick },
      { state: GameStates.NextScene },
    ],
    nextScene: SceneNames.OldNssParkingLot,
  },

  [SceneNames.OldNssParkingLot]: {
    background: 'old_nss_parking_lot.png',
    actors: [
      {
        name: Actors.Matt, position: ScenePositions.Left, asset: 'small_water_mccordinator_matt.jpeg', appearsAtStart: true,
      },
      {
        name: Actors.Charlie, position: ScenePositions.Center, asset: 'charlie.jpg', appearsAtStart: false,
      },
    ],
    text: [
      'Matt: Hey, it\'s a nice day!',
      'Matt: You want to play, Charlie?',
      'Charlie: Woof!',
      'Matt: Go fetch boy!',
      'Charlie: Wooooooof!',
      'Matt: What a good boy! Look at him go!',
    ],
    sceneFlow: [
      { state: GameStates.LoadingScene },
      { state: GameStates.RollingOutText },
      { state: GameStates.WaitingForClick },
      { state: GameStates.RollingOutText },
      { state: GameStates.WaitingForClick },
      { state: GameStates.IntroduceActor, options: { actor: Actors.Charlie } },
      { state: GameStates.RollingOutText },
      { state: GameStates.WaitingForClick },
      { state: GameStates.RollingOutText },
      { state: GameStates.WaitingForClick },
      { state: GameStates.RollingOutText },
      { state: GameStates.WaitingForClick },
      { state: GameStates.ExitActor, options: { actor: Actors.Charlie } },
      { state: GameStates.RollingOutText },
      { state: GameStates.WaitingForClick },
      { state: GameStates.Test },
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
