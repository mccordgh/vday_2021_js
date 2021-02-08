import { AssetsDir, GameStates } from './constants';

export const assetsUrl = (name) => `url(${AssetsDir}/${name})`;

export const enterActor = (actor) => ({ state: GameStates.EnterActor, options: { actor } });
export const exitActor = (actor) => ({ state: GameStates.ExitActor, options: { actor } });
export const loadScene = () => ({ state: GameStates.LoadScene });
export const introScene = () => ({ state: GameStates.IntroScene });
export const introSceneDisplay = () => ({ state: GameStates.IntroSceneDisplay });
export const introSceneFadeOut = () => ({ state: GameStates.IntroSceneFadeOut });
export const nextScene = () => ({ state: GameStates.NextScene });
export const presentText = () => ({ state: GameStates.PresentingText });
export const presentTextForChoice = () => ({ state: GameStates.PresentingTextForChoice });
export const presentChoices = (choices) => ({
  state: GameStates.PresentingChoices,
  options: { choices },
});
export const switchActorAsset = (actor, asset) => ({
  state: GameStates.SwitchingActorAsset,
  options: { actor, asset },
});
export const waitForClick = () => ({ state: GameStates.WaitingForClick });
export const waitForChoice = () => ({ state: GameStates.WaitingForChoice });
