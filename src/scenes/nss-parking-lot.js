import {
  Actors, SceneNames, ScenePositions,
} from '../constants';
import {
  enterActor, exitActor, loadScene, nextScene, presentText, waitForClick,
} from '../helpers';

export default {
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
    loadScene(),
    presentText(),
    waitForClick(),
    presentText(),
    waitForClick(),
    enterActor(Actors.Charlie),
    presentText(),
    waitForClick(),
    presentText(),
    waitForClick(),
    presentText(),
    waitForClick(),
    exitActor(Actors.Charlie),
    presentText(),
    waitForClick(),
    nextScene(),
  ],
  nextScene: SceneNames.NashvilleFairGrounds,
};
