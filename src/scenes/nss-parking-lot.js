import {
  Actors, SceneNames, ScenePositions,
} from '../constants';
import {
  enterActor, exitActor, loadScene, nextScene, presentChoices, presentText, presentTextForChoice, 
} from '../helpers';

export default {
  background: 'old_nss_parking_lot.png',
  actors: [
    {
      name: Actors.Matt, position: ScenePositions.Left, asset: 'matt_wave.png', appearsAtStart: true,
    },
    {
      name: Actors.Charlie, position: ScenePositions.Center, asset: 'charlie.png', appearsAtStart: false,
    },
  ],
  text: [
    'Matt: Hey, it\'s a nice day!',
    'Matt: You want to play, Charlie?',
    'Charlie: Woof!',
    'Matt: Go fetch boy!',
    'Charlie: Wooooooof!',
    'Matt: What a good boy! Look at him go!',
    'Matt: You guys make a good duo. :)',
    'Matt: Well shall we go to the fairgrounds??',
    'Matt: C\'mon! It\'ll be fun!',
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
    presentTextForChoice(),
    presentChoices(['That sounds good.', 'Hmm... I dunno...']),
    presentText(),
    nextScene(),
  ],
  nextScene: SceneNames.NashvilleFairGrounds,
};
