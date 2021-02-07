import { SceneNames } from './constants';

import NashvilleFairGrounds from './scenes/nashville-fairgrounds';
import NssLunchRoomScene from './scenes/nss-lunchroom';
import NssParkingLotScene from './scenes/nss-parking-lot';

const scenes = {
  [SceneNames.NssLunchRoom]: NssLunchRoomScene,
  [SceneNames.OldNssParkingLot]: NssParkingLotScene,
  [SceneNames.NashvilleFairGrounds]: NashvilleFairGrounds,
};

const findScene = (name) => {
  if (!scenes[name]) {
    throw new Error(`No scene with name: ${name} exists!`);
  }

  return scenes[name];
};

export default findScene;
