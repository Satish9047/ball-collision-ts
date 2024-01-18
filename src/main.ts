import {Ball, collisionDetectBorder} from "./class/ball.ts";
import {BALL_COUNT, BALL_SPEED, MAX_BALL_WIDTH, MAX_BALL_RADIUS, MIN_BALL_RADIUS} from "./constants.ts";
import {getRandomColor, getRandomNumber} from "./utils/utils.ts";

const ballsArray: Ball[] = [];
let viewport;
try {
    viewport = document.getElementById("app")as HTMLElement;
    if(!viewport) throw new Error("viewport not found");
} catch(ev){
    console.error(ev);
    // viewport = document.body;
    viewport = document.createElement("div");
    viewport.id = "app";
    viewport.classList.add("view-port");
    document.body.appendChild(viewport);
}



const VIEWPORT_WIDTH:number = viewport.clientWidth;
const VIEWPORT_HEIGHT: number = viewport.clientHeight;



function getViewPortStartX(radius: number): number {
    return radius;
}
function getViewPortStartY(radius: number): number {
    return radius;
}
function getViewPortUsableWidth(radius: number): number {
    return VIEWPORT_WIDTH - radius;
}
function getViewPortUsableHeight(radius: number): number {
    return VIEWPORT_HEIGHT - radius;
}

// Create balls, store in an array and render in viewport
for (let i: number = 0; i < BALL_COUNT; i++) {
    const r = getRandomNumber(Math.min(MIN_BALL_RADIUS, MAX_BALL_RADIUS),MAX_BALL_RADIUS);
    const x = getRandomNumber(getViewPortStartX(r), getViewPortUsableWidth(r));
    const y = getRandomNumber(getViewPortStartY(r), getViewPortUsableHeight(r));
    //    const xSpeed = getRandomNumberOtherThan(-BALL_SPEED, BALL_SPEED);
    //    const ySpeed = getRandomNumberOtherThan(-BALL_SPEED, BALL_SPEED);
    const ballColor = getRandomColor();
    const ball: Ball = new Ball(x, y, r, ballColor);

    ballsArray.push(ball);
    viewport.appendChild(ball.getElement());
}


// Render balls in viewport
function render() {
    for (let i = 0; i < ballsArray.length; i++) {
        const ball = ballsArray[i];
        ball.move();
        ball.draw();
        collisionDetectBorder(ball ,getViewPortStartX(ball.radius), getViewPortStartY(ball.radius), VIEWPORT_WIDTH, VIEWPORT_HEIGHT);

        for (let j = i + 1; j < ballsArray.length; j++) {
            const otherBall = ballsArray[j];
            ball.checkBallCollision(otherBall);
        }
    }

    requestAnimationFrame(render);
}

requestAnimationFrame(render);
