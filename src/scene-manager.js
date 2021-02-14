import { SceneNames } from './constants';

import NashvilleFairGrounds from './scenes/nashville-fairgrounds';
import NssLunchRoomScene from './scenes/nss-lunchroom';
import NssParkingLotScene from './scenes/nss-parking-lot';
import KoiSushiOutside from './scenes/nashville-koi-outside';
import KoiSushiInside from './scenes/nashville-koi-inside';
import Ending from './scenes/ending';
import Intro from './scenes/intro';

const scenes = {
  [SceneNames.Ending]: Ending,
  [SceneNames.Intro]: Intro,
  [SceneNames.NssLunchRoom]: NssLunchRoomScene,
  [SceneNames.OldNssParkingLot]: NssParkingLotScene,
  [SceneNames.NashvilleFairGrounds]: NashvilleFairGrounds,
  [SceneNames.KoiSushiOutside]: KoiSushiOutside,
  [SceneNames.KoiSushiInside]: KoiSushiInside,
};

const findScene = (name) => {
  if (!scenes[name]) {
    throw new Error(`No scene with name: ${name} exists!`);
  }

  return scenes[name];
};

export default findScene;
