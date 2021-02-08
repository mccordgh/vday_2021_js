import {
  ActorAssets,
  Actors, BackgroundAssets, SceneNames, ScenePositions,
} from '../constants';
import {
  enterActor,
  introScene,
  nextScene,
  presentChoices,
  presentText,
  presentTextForChoice,
  switchActorAsset,
} from '../helpers';

export default {
  background: BackgroundAssets.NssLunchRoom,
  title: 'Nashville Software School 2017',
  actors: [
    {
      name: Actors.Matt,
      position: ScenePositions.Right,
      asset: ActorAssets.MattWave,
      appearsAtStart: false,
    },
  ],
  text: [
    '????: Hey there!!',
    '????: Wait up!',
    'Matt: Hi :) ... How is your day going?',
    'Matt: I can\'t believe we only have a couple of weeks left!',
    'Matt: I\'ve been so focused on my work that I feel like we hardly got to know each other.',
    'Matt: Want to go get lunch somewhere?',
    'Matt: Okay. Let\'s get outta here!',
  ],
  sceneFlow: [
    introScene(),
    presentText(),
    presentText(),
    enterActor(Actors.Matt),
    presentTextForChoice(),
    presentChoices(['It\'s uh... going', 'Not bad, actually!', 'Fantasticcccc!']),
    switchActorAsset(Actors.Matt, ActorAssets.MattThink),
    presentText(),
    presentText(),
    presentTextForChoice(),
    presentChoices(['Sure that sounds fun!', 'Yea! Lets get Charlie!']),
    switchActorAsset(Actors.Matt, ActorAssets.MattSmile),
    presentText(),
    nextScene(),
  ],
  nextScene: SceneNames.OldNssParkingLot,
};
