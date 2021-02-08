import {
  Actors, SceneNames, ScenePositions,
} from '../constants';
import {
  enterActor,
  loadScene,
  nextScene,
  presentChoices,
  presentText,
  presentTextForChoice,
} from '../helpers';

export default {
  background: 'nss_lunchroom.png',
  actors: [
    {
      name: Actors.Matt, position: ScenePositions.Right, asset: 'matt_wave.png', appearsAtStart: false,
    },
  ],
  text: [
    '????: Hey, Athena!',
    'Matt: How is your day going?',
    'Matt: I can\'t believe we only have a couple of weeks left!',
    'Matt: I have been so focused on my work that I feel like we hardly got to know each other.',
    'Matt: Want to go get lunch somewhere?',
    'Matt: Okay. Let\'s get outta here!',
  ],
  sceneFlow: [
    loadScene(),
    presentText(),
    enterActor(Actors.Matt),
    presentTextForChoice(),
    presentChoices(['It\'s uh... going', 'Not bad, actually!', 'Fantasticcccc!']),
    presentText(),
    presentText(),
    presentTextForChoice(),
    presentChoices(['Sure that sounds fun!', 'Yea! Lets get Charlie!']),
    presentText(),
    nextScene(),
  ],
  nextScene: SceneNames.OldNssParkingLot,
};
