import { AssetsDir, GameStates } from './constants';

export const assetsUrl = (name) => `url(${AssetsDir}/${name})`;

export const enterActor = (actor) => ({ state: GameStates.EnterActor, options: { actor } });
export const exitActor = (actor) => ({ state: GameStates.ExitActor, options: { actor } });
export const loadScene = () => ({ state: GameStates.LoadingScene });
export const nextScene = () => ({ state: GameStates.NextScene });
export const presentText = () => ({ state: GameStates.PresentingText });
export const presentChoices = (choices) => ({
  state: GameStates.PresentingChoices,
  options: { choices },
});
export const waitForClick = () => ({ state: GameStates.WaitingForClick });
export const waitForChoice = () => ({ state: GameStates.WaitingForChoice });
