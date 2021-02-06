import './main.css';
import {
  AssetsDir, EventTypes, GameStates, SceneNames, ScenePositions,
} from './constants';
import { findScene } from './scene-manager';

// const canvas = document.querySelector(".canvas");
// const canvasRightOverlay = document.querySelector(".canvas-right-overlay");
// const canvasBottomTextWrapper = document.querySelector(".canvas-bottom-text--wrapper");
// const canvasBottomText = document.querySelector(".canvas-bottom-text");
// let canvasBottomTextCursor = document.querySelector(".canvas-bottom-text-cursor");

const currentScene = findScene(SceneNames.NssLunchRoom);
let running = true;

// <div class="canvas">
//     <div class="canvas-right-overlay">
//     </div>

//     <div class="canvas-bottom-text--wrapper hidden">
//         <div class="canvas-bottom-text"></div>
//         <div class="canvas-bottom-text-cursor"></div>
//     </div>
// </div>

const canvas = document.createElement('div');
canvas.classList.add('canvas');

const canvasRightOverlay = document.createElement('div');
canvasRightOverlay.classList.add('canvas-right-overlay');

const canvasBottomTextWrapper = document.createElement('div');
canvasBottomTextWrapper.classList.add('canvas-bottom-text--wrapper');

const canvasBottomText = document.createElement('div');
canvasBottomText.classList.add('canvas-bottom-text');

const canvasBottomTextCursor = document.createElement('div');
canvasBottomTextCursor.classList.add('canvas-bottom-text-cursor');

document.body.appendChild(canvas);

canvas.appendChild(canvasRightOverlay);
canvas.appendChild(canvasBottomTextWrapper);

canvasBottomTextWrapper.appendChild(canvasBottomText);
canvasBottomTextWrapper.appendChild(canvasBottomTextCursor);

let cursorCount = 0;
const toggleCursor = (hide) => {
  if (hide !== undefined) {
    if (hide) {
      canvasBottomTextCursor.classList.add('hidden');
    } else {
      canvasBottomTextCursor.classList.remove('hidden');
    }

    return;
  }

  cursorCount += 1;

  if (cursorCount >= 20) {
    canvasBottomTextCursor.classList.toggle('hidden');

    cursorCount = 0;
  }
};

const updateText = () => {
  canvasBottomText.innerHTML += currentScene.text[0][0];
  currentScene.text[0] = currentScene.text[0].substr(1, currentScene.text[0].length - 1);
};

const clearText = () => {
  canvasBottomText.innerHTML = '';
};

const gameUpdate = (event) => {
  switch (currentScene.sceneFlow[0]) {
    case GameStates.LoadingScene:
      if (currentScene.background) {
        canvas.style.backgroundImage = AssetsDir + currentScene.background;
      }

      if (currentScene.actors && currentScene.actors.length) {
        currentScene.actors.forEach((actor) => {
          // actor has { name, position, asset }
          if (actor.position === ScenePositions.Right) {
            canvasRightOverlay.style.backgroundImage = AssetsDir + actor.asset;
          }
        });
      }

      currentScene.sceneFlow.shift();
      break;

    case GameStates.RollingOutText:
      if (currentScene.text && currentScene.text[0] && currentScene.text[0].length) {
        updateText();
      } else {
        currentScene.sceneFlow.shift();
      }

      break;

    case GameStates.WaitingForClick:
      if (event && event.type === EventTypes.Click) {
        toggleCursor(true);
        clearText();
        canvasBottomTextWrapper.classList.add('hidden');

        currentScene.sceneFlow.shift();
      }

      toggleCursor();
      break;

    default:
      running = false;

      throw new Error(`currentScene case hit that wasn't expected: ${currentScene.sceneFlow}`);
  }
};

document.addEventListener('click', gameUpdate);

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
