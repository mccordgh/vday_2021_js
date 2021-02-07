// fake enums !!
export const GameStates = Object.freeze({
  WaitingForClick: 'WaitingForClick',
  PresentingText: 'PresentingText',
  NextScene: 'NextScene',
  PresentingChoices: 'PresentingChoices',
  WaitingForChoice: 'WaitingForChoice',
  LoadingScene: 'LoadingScene',
  EnterActor: 'EnterActor',
  ExitActor: 'ExitActor',
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
  NssLunchRoom: 'NSS Lunch Room',
  OldNssParkingLot: 'NSS Parking Lot',
  NashvilleFairGrounds: 'NashvilleFairGrounds',
});

export const AssetsDir = 'assets';

export const DomClasses = Object.freeze({
  CanvasBottomChoicesOption: 'canvas-bottom-choices--option',
});
