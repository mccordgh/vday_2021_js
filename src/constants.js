// fake enums !!
export const GameStates = Object.freeze({
  EnterActor: 'EnterActor',
  ExitActor: 'ExitActor',
  LoadScene: 'LoadScene',
  IntroScene: 'IntroScene',
  IntroSceneDisplay: 'IntroSceneDisplay',
  IntroSceneFadeOut: 'IntroSceneFadeOut',
  NextScene: 'NextScene',
  PresentingChoices: 'PresentingChoices',
  PresentingText: 'PresentingText',
  PresentingTextForChoice: 'PresentingTextForChoice',
  SwitchingActorAsset: 'SwitchingActorAsset',
  WaitingForClick: 'WaitingForClick',
  WaitingForChoice: 'WaitingForChoice',
});

export const EventTypes = Object.freeze({
  Click: 'click',
});

export const ScenePositions = Object.freeze({
  Left: 0,
  Center: 1,
  Right: 2,
});

export const Actors = Object.freeze({
  Matt: 'Matt',
  Charlie: 'Charlie',
  Stella: 'Stella',
});

export const SceneNames = Object.freeze({
  NashvilleFairGrounds: 'NashvilleFairGrounds',
  NssLunchRoom: 'NSSLunchRoom',
  OldNssParkingLot: 'NSSParkingLot',
});

export const AssetsDir = 'assets';

export const DomClasses = Object.freeze({
  CanvasBottomChoicesOption: 'canvas-bottom-choices--option',
});

export const ActorAssets = Object.freeze({
  Charlie: 'charlie.png',
  JoeShep: 'joe_shep.png',
  MattHug: 'matt_hug.png',
  MattLove: 'matt_love.png',
  MattPoint: 'matt_point.png',
  MattShrug: 'matt_shrug.png',
  MattSmile: 'matt_smile.png',
  MattSurprise: 'matt_surprise.png',
  MattThink: 'matt_think.png',
  MattWave: 'matt_wave.png',
  MosDef: 'mos_def.webp',
  Stella: 'stella.png',
});

export const BackgroundAssets = Object.freeze({
  NashvilleFairGrounds: 'nashville_fairgrounds.png',
  NashvilleHouseOutside: 'nashville_house_outside.png',
  NashvilleKoiSushiInside: 'nashville_koi_sushi_inside.png',
  NashvilleKoiSushiOutside: 'nashville_koi_sushi_outside.png',
  NashvilleLasMaracasInside: 'nashville_las_maracas_inside.png',
  NashvilleLasMaracasOutside: 'nashville_las_maracas_outside.png',
  NssGameNight: 'nss_game_night_small.webp',
  NssLunchRoom: 'nss_lunchroom.png',
  OldNssParkingLot: 'old_nss_parking_lot.png',
})
