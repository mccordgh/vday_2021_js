import './main.css';
import {
  AssetsDir, EventTypes, GameStates, SceneNames, ScenePositions,
} from './constants';
import { findScene } from './scene-manager';

// init all the game vars and build out DOM
let currentScene = findScene(SceneNames.NssLunchRoom);
let running = true;
let cursorDelayCount = 0;

const canvas = document.createElement('div');
canvas.classList.add('canvas', 'img-parent');

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

document.body.appendChild(canvas);
document.body.appendChild(canvasBottomTextWrapper);

canvasOverlayWrapper.appendChild(canvasLeftOverlay);
canvasOverlayWrapper.appendChild(canvasCenterOverlay);
canvasOverlayWrapper.appendChild(canvasRightOverlay);

canvas.appendChild(canvasOverlayWrapper);

canvasBottomTextWrapper.appendChild(canvasBottomText);
canvasBottomTextWrapper.appendChild(canvasBottomTextCursor);

// main game logic and helper functions
const toggleCursor = (hide) => {
  if (hide !== undefined) {
    if (hide) {
      canvasBottomTextCursor.classList.add('hidden');
    } else {
      canvasBottomTextCursor.classList.remove('hidden');
    }

    return;
  }

  cursorDelayCount += 1;

  if (cursorDelayCount >= 30) {
    canvasBottomTextCursor.classList.toggle('hidden');

    cursorDelayCount = 0;
  }
};

const updateText = () => {
  canvasBottomText.innerHTML += currentScene.text[0][0];
  currentScene.text[0] = currentScene.text[0].substr(1, currentScene.text[0].length - 1);
};

const clearText = () => {
  canvasBottomText.innerHTML = '';
};

const assetsUrl = (name) => `url(${AssetsDir}/${name})`;

const loadingSceneState = () => {
  if (currentScene.background) {
    canvas.style.backgroundImage = assetsUrl(currentScene.background);
  }

  if (currentScene.actors && currentScene.actors.length) {
    currentScene.actors.forEach((actor) => {
      // actor has { name, position, asset }
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
          throw new Error(`Unrecognized SCenePosition in LoadScene State: ${actor.position}`);
      }
    });
  }

  currentScene.sceneFlow.shift();
};

const rollingOutTextState = () => {
  if (currentScene.text && currentScene.text[0] && currentScene.text[0].length) {
    updateText();
  } else {
    currentScene.text.shift();
    currentScene.sceneFlow.shift();
  }
};

const waitingForClickState = (event) => {
  if (event.type && event.type === EventTypes.Click) {
    toggleCursor(true);
    clearText();

    currentScene.sceneFlow.shift();
  }

  toggleCursor();
};

const clearCurrentScene = () => {
  canvas.style.backgroundImage = null;
  canvasRightOverlay.style.backgroundImage = null;
  canvasCenterOverlay.style.backgroundImage = null;
  canvasLeftOverlay.style.backgroundImage = null;

  clearText();
}

const nextSceneState = (name) => {
  currentScene = findScene(name);
};

const gameUpdate = (event) => {
  switch (currentScene.sceneFlow[0]) {
    case GameStates.LoadingScene:
      loadingSceneState();
      break;

    case GameStates.RollingOutText:
      rollingOutTextState();
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

    default:
      running = false;

      throw new Error(`currentScene case hit that wasn't expected: ${currentScene.sceneFlow}`);
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
