// fake enums !!
export const GameStates = Object.freeze({
  WaitingForClick: 'WaitingForClick',
  RollingOutText: 'RollingOutText',
  NextScene: 'NextScene',
  SetupChoices: 'SetupChoices',
  WaitingForChoice: 'WaitingForChoice',
  LoadingScene: 'LoadingScene',
  Test: 'Test',
  IntroduceActor: 'IntroduceActor',
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
});

export const SceneNames = Object.freeze({
  NssLunchRoom: 'NSS Lunch Room',
  OldNssParkingLot: 'NSS Parking Lot',
});

export const AssetsDir = 'assets';

export const DomClasses = Object.freeze({
  CanvasBottomChoicesOption: 'canvas-bottom-choices--option',
});
