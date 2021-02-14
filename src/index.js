import './main.css';
import {
  DomClasses, EventTypes, GameStates, SceneNames, ScenePositions,
} from './constants';
import findScene from './scene-manager';
import {
  assetsUrl,
  ending,
  introSceneFadeOut,
  introSceneDisplay,
  loadScene,
  waitForChoice,
  waitForClick,
} from './helpers';

// init all the game vars and build out DOM
let currentScene = findScene(SceneNames.Intro);
let running = true;
let delayCounter = 0;

const canvas = document.createElement('div');
canvas.classList.add('canvas');

const sceneLoading = document.createElement('div');
sceneLoading.classList.add('scene-loading', 'hidden');

const sceneLoadingText = document.createElement('div');
sceneLoadingText.classList.add('scene-loading--text');

const canvasOverlayWrapper = document.createElement('div');
canvasOverlayWrapper.classList.add('canvas-overlay--wrapper');

const canvasRightOverlay = document.createElement('div');
canvasRightOverlay.classList.add('canvas-overlay', 'canvas-overlay--right', 'img-parent');

const canvasCenterOverlay = document.createElement('div');
canvasCenterOverlay.classList.add('canvas-overlay', 'canvas-overlay--center', 'img-parent');

const canvasLeftOverlay = document.createElement('div');
canvasLeftOverlay.classList.add('canvas-overlay', 'canvas-overlay--left', 'img-parent');

const canvasBottomTextWrapper = document.createElement('div');
canvasBottomTextWrapper.classList.add('canvas-bottom-text--wrapper');

const canvasBottomText = document.createElement('div');
canvasBottomText.classList.add('canvas-bottom-text');

const canvasBottomTextCursor = document.createElement('div');
canvasBottomTextCursor.classList.add('canvas-bottom-text-cursor');

const canvasBottomChoices = document.createElement('div');
canvasBottomChoices.classList.add('canvas-bottom-choices');

document.body.appendChild(canvas);
document.body.appendChild(canvasBottomTextWrapper);
document.body.appendChild(sceneLoading);

sceneLoading.appendChild(sceneLoadingText);

canvasOverlayWrapper.appendChild(canvasLeftOverlay);
canvasOverlayWrapper.appendChild(canvasCenterOverlay);
canvasOverlayWrapper.appendChild(canvasRightOverlay);

canvas.appendChild(canvasOverlayWrapper);
canvas.appendChild(canvasBottomChoices);

canvasBottomTextWrapper.appendChild(canvasBottomText);
canvasBottomTextWrapper.appendChild(canvasBottomTextCursor);

const insertScene = (helper) => {
  currentScene.sceneFlow.unshift(helper());
};

// main game logic and helper functions
const advanceSceneFlow = () => {
  currentScene.sceneFlow.shift();
};

const toggleCursor = (hide) => {
  if (hide !== undefined) {
    if (hide) {
      canvasBottomTextCursor.classList.add('hidden');
    } else {
      canvasBottomTextCursor.classList.remove('hidden');
    }

    return;
  }

  delayCounter += 1;

  if (delayCounter >= 30) {
    canvasBottomTextCursor.classList.toggle('hidden');

    delayCounter = 0;
  }
};

const updateText = () => {
  canvasBottomText.innerHTML += currentScene.text[0][0];

  currentScene.text[0] = currentScene.text[0].substr(1, currentScene.text[0].length - 1);
};

const clearText = () => {
  canvasBottomText.innerHTML = '';
};

const enterActor = (actor) => {
  switch (actor.position) {
    case ScenePositions.Left:
      canvasLeftOverlay.style.backgroundImage = assetsUrl(actor.asset);
      break;

    case ScenePositions.Center:
      canvasCenterOverlay.style.backgroundImage = assetsUrl(actor.asset);
      break;

    case ScenePositions.Right:
      canvasRightOverlay.style.backgroundImage = assetsUrl(actor.asset);
      break;

    default:
      throw new Error(`Unrecognized ScenePosition in INtroduceActor State: ${actor.position}`);
  }
};

const exitActor = (actor) => {
  switch (actor.position) {
    case ScenePositions.Left:
      canvasLeftOverlay.style.backgroundImage = null;
      break;

    case ScenePositions.Center:
      canvasCenterOverlay.style.backgroundImage = null;
      break;

    case ScenePositions.Right:
      canvasRightOverlay.style.backgroundImage = null;
      break;

    default:
      throw new Error(`Unrecognized ScenePosition in ExitActor State: ${actor.position}`);
  }
};

const loadingSceneState = () => {
  if (currentScene.background) {
    canvas.style.backgroundImage = assetsUrl(currentScene.background);
  }

  if (currentScene.actors && currentScene.actors.length) {
    currentScene.actors.forEach((actor) => {
      if (actor.appearsAtStart) {
        enterActor(actor);
      }
    });
  }

  advanceSceneFlow();
};

const presentingTextState = (advanceToWaitingForClick) => {
  if (currentScene.text && currentScene.text[0] && currentScene.text[0].length) {
    updateText();
  } else {
    currentScene.text.shift();
    advanceSceneFlow();

    if (advanceToWaitingForClick) {
      insertScene(waitForClick);
    }
  }
};

const waitingForClickState = (event) => {
  if (event.type && event.type === EventTypes.Click) {
    toggleCursor(true);
    clearText();

    advanceSceneFlow();
    delayCounter = 0;
  }

  toggleCursor();
};

const clearCurrentScene = () => {
  canvas.style.backgroundImage = null;
  canvasRightOverlay.style.backgroundImage = null;
  canvasCenterOverlay.style.backgroundImage = null;
  canvasLeftOverlay.style.backgroundImage = null;

  clearText();
};

const nextSceneState = (name) => {
  currentScene = findScene(name);
};

const findActorForCurrentFlow = (currentFlow) => {
  const name = currentFlow.options.actor;

  return currentScene.actors.find((actor) => actor.name === name);
};

const presentingChoicesState = (currentFlow) => {
  const { choices } = currentFlow.options;

  choices.forEach((choice) => {
    const choiceDiv = document.createElement('div');
    choiceDiv.innerHTML = choice;
    choiceDiv.classList.add(DomClasses.CanvasBottomChoicesOption);

    canvasBottomChoices.appendChild(choiceDiv);
  });
};

const clearChoices = () => {
  canvasBottomChoices.innerHTML = null;
};

const switchActorAssetState = (currentFlow) => {
  const { options } = currentFlow;

  const actor = findActorForCurrentFlow(currentFlow);
  actor.asset = options.asset;

  enterActor(actor);
};

const initializeIntroScene = () => {
  sceneLoadingText.innerHTML = currentScene.title;
  sceneLoading.style.opacity = 1;
  sceneLoading.classList.remove('hidden');
};

const cleanupIntroScene = () => {
  sceneLoading.classList.add('hidden');
  sceneLoadingText.innerHTML = null;

  delayCounter = 0;

  advanceSceneFlow();
};

const introSceneFadeOutState = () => {
  sceneLoading.style.opacity = 1 - delayCounter;

  delayCounter += 0.01;

  if (delayCounter > 1) {
    cleanupIntroScene();
  }
};

const introSceneState = () => {
  delayCounter += 1;

  if (delayCounter > 240) {
    advanceSceneFlow();

    delayCounter = 0;

    insertScene(introSceneFadeOut);
    insertScene(loadScene);
  }
};

const gameUpdate = (event) => {
  const [currentFlow] = currentScene.sceneFlow;
  switch (currentFlow.state) {
    case GameStates.LoadScene:
      loadingSceneState();
      break;

    case GameStates.PresentingTextForChoice:
    case GameStates.PresentingText:
      presentingTextState(currentFlow.state === GameStates.PresentingText);
      break;

    case GameStates.WaitingForClick:
      if (!event) {
        break;
      }

      waitingForClickState(event);
      break;

    case GameStates.NextScene:
      if (!currentScene.nextScene) {
        throw new Error('currentScene has no nextScene to move to.');
      }

      clearCurrentScene();
      nextSceneState(currentScene.nextScene);
      break;

    case GameStates.EnterActor:
      enterActor(findActorForCurrentFlow(currentFlow));

      advanceSceneFlow();
      break;

    case GameStates.ExitActor:
      exitActor(findActorForCurrentFlow(currentFlow));

      advanceSceneFlow();
      break;

    case GameStates.PresentingChoices:
      if (
        !currentFlow.options
        || !currentFlow.options.choices
        || !currentFlow.options.choices.length
      ) {
        throw new Error("state SetupChoices currentScene doesn't have choices");
      }

      presentingChoicesState(currentFlow);
      advanceSceneFlow();
      insertScene(waitForChoice);
      break;

    case GameStates.WaitingForChoice:
      if (event && event.type && event.type === EventTypes.Click) {
        const { target } = event;

        if (target.classList && target.classList.contains(DomClasses.CanvasBottomChoicesOption)) {
          clearText();
          clearChoices();
          advanceSceneFlow();
        }
      }
      break;

    case GameStates.SwitchingActorAsset:
      switchActorAssetState(currentFlow);
      advanceSceneFlow();
      break;

    case GameStates.IntroScene:
      initializeIntroScene();

      advanceSceneFlow();
      insertScene(introSceneDisplay);
      break;

    case GameStates.IntroDelayedScene:
      initializeIntroScene();

      advanceSceneFlow();
      insertScene(waitForClick);
      break;

    case GameStates.IntroFinalScene:
      initializeIntroScene();

      advanceSceneFlow();
      insertScene(ending);
      break;

    case GameStates.IntroSceneDisplay:
      introSceneState();
      break;

    case GameStates.IntroSceneFadeOut:
      introSceneFadeOutState();
      break;

    case GameStates.Ending:
      // Do nothing keep showing the ending screen
      break;

    default:
      running = false;

      // eslint-disable-next-line no-console
      console.log(currentScene);
      throw new Error(`currentScene case hit that wasn't expected: ${currentScene.sceneFlow[0].state}`);
  }
};

document.addEventListener('click', gameUpdate);

// init gameloop vars
const fps = 60;
const timePerTick = 1000 / fps;
let delta = 0;
let deltaTime = 0;
let now = Date.now();
let lastTime = Date.now();
let timer = 0;

const gameCleanup = () => {
  // eslint-disable-next-line no-console
  console.log('Game Done');
};

const loop = () => {
  if (running) {
    now = Date.now();
    delta = now - lastTime;
    timer += delta;
    lastTime = now;

    if (timer >= timePerTick) {
      deltaTime = timer / 1000;
      gameUpdate(deltaTime);
      timer = 0;
    }

    window.requestAnimationFrame(loop);

    return;
  }

  gameCleanup();
};

loop();
