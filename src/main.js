
const canvas = document.querySelector(".canvas");
const canvasRightOverlay = document.querySelector(".canvas-right-overlay");
const canvasBottomTextWrapper = document.querySelector(".canvas-bottom-text--wrapper");
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
    Next: 2,
});

const EventTypes = Object.freeze({
    Click: "click",
});

let gameState = GameStates.RollingOutText;
canvasBottomTextWrapper.classList.remove("hidden");
// let gameState = GameStates.RollingOutText;

let cursorCount = 0;
const toggleCursor = (hide) => {
    if (hide !== undefined) {
        if (hide) {
            canvasBottomTextCursor.classList.add("hidden");
        } else {
            canvasBottomTextCursor.classList.remove("hidden");
        }

        return;
    }

    cursorCount++;

    if (cursorCount >= 20) {
        canvasBottomTextCursor.classList.toggle("hidden");

        cursorCount = 0;
    }
}

const updateText = () => {
    canvasBottomText.innerHTML += text[0];
    text = text.substr(1, text.length - 1);
}

const clearText = () => {
    canvasBottomText.innerHTML = "";
}

const gameUpdate = (event) => {
    switch (gameState) {
        case GameStates.RollingOutText:
            if (text.length > 0) {
               updateText();
            } else {
                gameState = GameStates.WaitingForInput;
            }

            break;

        case GameStates.WaitingForInput:
            if (event && event.type === EventTypes.Click) {
                toggleCursor(true);
                clearText();
                canvasBottomTextWrapper.classList.add("hidden");

                gameState = GameStates.Next;
            }
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

document.addEventListener("click", gameUpdate);


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
