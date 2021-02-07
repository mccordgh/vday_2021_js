import {
  Actors, SceneNames, ScenePositions,
} from '../constants';
import {
  loadScene, nextScene, presentChoices, presentText, waitForChoice, waitForClick,
} from '../helpers';

export default {
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
    loadScene(),
    presentText(),
    waitForClick(),
    presentText(),
    presentChoices(['Sure that sounds fun!', 'Yea! Lets get Charlie!']),
    waitForChoice(),
    presentText(),
    waitForClick(),
    nextScene(),
  ],
  nextScene: SceneNames.OldNssParkingLot,
};
