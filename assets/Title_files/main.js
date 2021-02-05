
const canvas = document.querySelector(".canvas");
const canvasRightOverlay = document.querySelector(".canvas-right-overlay");
const canvasBottomText = document.querySelector(".canvas-bottom-text");
let canvasBottomTextCursor = document.querySelector(".canvas-bottom-text-cursor");

let gameInterval;

const background = new Image();
background.src = "assets/nss_lunchroom.png";
canvas.appendChild(background);

const overlayImg = new Image();
overlayImg.src = "assets/placeholder.png";
canvasRightOverlay.appendChild(overlayImg);

let text = "Hello world testing testing lorem ipsum ipsum ipsum";
// canvasBottomText.innerHTML = text;

const GameStates = Object.freeze({
    WaitingForInput: 0,
    RollingOutText: 1,
});

let gameState = GameStates.RollingOutText;
// let gameState = GameStates.RollingOutText;

let cursorCount = 0;
const toggleCursor = () => {
    cursorCount++;

    if (cursorCount >= 20) {
        console.log("TOGGLE")
        // canvasBottomTextCursor.classList.toggle("hidden");

        cursorCount = 0;
    }
}

const gameUpdate = () => {
    switch (gameState) {
        case GameStates.RollingOutText:
            if (text.length > 0) {
                canvasBottomText.innerHTML += text[0];
                text = text.substr(1, text.length - 1);
            } else {
                gameState = GameStates.WaitingForInput;
            }

            break;

        case GameStates.WaitingForInput:
            toggleCursor();
            break;
    }
}

const gameRender = () => {
    // probably don't need because its handled by the browser
}

const gameCleanup = () => {
    console.log("Game END");
}

gameInterval = setInterval(gameUpdate, 30);

// const fps = 60;
// const timePerTick = 1000 / fps;
// let delta = 0;
// let deltaTime = 0;
// let now = Date.now();
// let lastTime = Date.now();
// let timer = 0;

// let running = true;

// const loop = () => {
//     if (running) {
//         now = Date.now();
//         delta = now - lastTime;
//         timer += delta;
//         lastTime = now;
        
//         if (timer >= timePerTick){
//             deltaTime = timer / 1000;
//             gameUpdate(deltaTime);
//             gameRender();
//             timer = 0;
//         }

//         window.requestAnimationFrame(loop);
        
//         return;
//     }
    
//     gameCleanup();
// };

// loop();
