import {
  Actors, SceneNames, ScenePositions,
} from '../constants';
import {
  enterActor, exitActor, loadScene, nextScene, presentText, 
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
    'Matt: Well shall we go to the fairgrounds??',
  ],
  sceneFlow: [
    loadScene(),
    presentText(),
    presentText(),
    enterActor(Actors.Charlie),
    presentText(),
    presentText(),
    presentText(),
    exitActor(Actors.Charlie),
    presentText(),
    presentText(),
    nextScene(),
  ],
  nextScene: SceneNames.NashvilleFairGrounds,
};
