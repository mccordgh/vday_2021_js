import {
  Actors, SceneNames, ScenePositions,
} from '../constants';
import {
  enterActor,
  exitActor,
  loadScene,
  nextScene,
  presentChoices,
  presentText,
  presentTextForChoice,
} from '../helpers';

export default {
  background: 'nashville_fairgrounds.png',
  actors: [
    {
      name: Actors.Matt, position: ScenePositions.Center, asset: 'small_water_mccordinator_matt.jpeg', appearsAtStart: true,
    },
    {
      name: Actors.Charlie, position: ScenePositions.Left, asset: 'charlie.jpg', appearsAtStart: false,
    },
    {
      name: Actors.Stella, position: ScenePositions.Right, asset: 'stella.jpg', appearsAtStart: false,
    },
  ],
  text: [
    'Matt: It\'s so nice out today!',
    'Matt: Hey look Charlie found a friend!',
    'Charlie: BORK! :D',
    'Stella: *TONGUE WHIP* :)',
    'Matt: Hello! Who are you?? :D',
    'Stella: *scurries off*',
    'Matt: What a cute pooper! I hope we meet her again!',
    'Matt: So, tell me a bit more about yourself. :)',
  ],
  sceneFlow: [
    loadScene(),
    presentText(),
    presentText(),
    enterActor(Actors.Charlie),
    presentText(),
    enterActor(Actors.Stella),
    presentText(),
    presentText(),
    presentText(),
    exitActor(Actors.Stella),
    presentText(),
    presentTextForChoice(),
    presentChoices(['I was in the music biz!', 'I love my Charlie!', 'I am an amazing plant mama!', 'I\'m from the amazing Pacific Northwest!']),
    presentText(),
    nextScene(),
  ],
  nextScene: SceneNames.OldNssParkingLot,
};
