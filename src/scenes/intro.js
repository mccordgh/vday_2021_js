import { SceneNames } from '../constants';
import { introDelayedScene, nextScene } from '../helpers';

export default {
  title: 'V-Day 2021 The Game!\n\nClick anywhere to begin.',
  sceneFlow: [
    introDelayedScene(),
    nextScene(),
  ],
  nextScene: SceneNames.NssLunchRoom,
};
