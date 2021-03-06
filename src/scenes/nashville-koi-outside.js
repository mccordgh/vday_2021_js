import {
  ActorAssets,
  Actors,
  BackgroundAssets,
  SceneNames,
  ScenePositions,
} from '../constants';
import {
  enterActor,
  exitActor,
  introScene,
  nextScene,
  presentChoices,
  presentText,
  presentTextForChoice,
  switchActorAsset,
} from '../helpers';

export default {
  background: BackgroundAssets.NashvilleKoiSushiOutside,
  title: 'Koi Sushi (outside)',
  actors: [
    {
      name: Actors.Matt,
      position: ScenePositions.Center,
      asset: ActorAssets.MattSmile,
      appearsAtStart: true,
    },
    {
      name: Actors.MosDef,
      position: ScenePositions.Left,
      asset: ActorAssets.MosDef,
      appearsAtStart: false,
    },
  ],
  text: [
    'Matt: Hi! Thanks for meeting up with me.',
    'Matt: I\'ve heard this place is pretty good.',
    'Matt: How long have you lived around here??',
    'Matt: You can say that again.',
    'Matt: Where would you go if you could live anywhere??',
    'Matt: Very Cool. I can see you have that adventurer\'s spirit :)',
    'Host: Your table is ready... *SIGH*',
    'Matt: Hey that host kinda looks like...',
  ],
  sceneFlow: [
    introScene(),
    presentText(),
    switchActorAsset(Actors.Matt, ActorAssets.MattThink),
    presentText(),
    presentText(),
    presentChoices(['I can\'t even remember now..', 'Feels like a lifetime!', 'Too long!']),
    switchActorAsset(Actors.Matt, ActorAssets.MattPoint),
    presentText(),
    presentTextForChoice(),
    presentChoices(['Seattle', 'California', 'Colorando', 'Another Country', 'Van life!', 'Not 100% sure, but I have some thoughts about it...']),
    switchActorAsset(Actors.Matt, ActorAssets.MattHug),
    presentText(),
    enterActor(Actors.MosDef),
    presentText(),
    exitActor(Actors.MosDef),
    switchActorAsset(Actors.Matt, ActorAssets.MattSurprise),
    presentText(),
    nextScene(),
  ],
  nextScene: SceneNames.KoiSushiInside,
};
