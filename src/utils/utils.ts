import {Ball} from "../class/ball.ts";

//return random number between min and max
export function getRandomNumber (min: number, max: number): number{
    return Math.floor(Math.random()*(max-min + 5) + min);
}

//collision detection between borders


//detecting ball collision
//export function detectBallCollision (ball1: Ball, ball2:Ball) {
//
//}

//get random color
export function getRandomColor(): string{
    const color: string[] = ["red", "blue", "green", "cyan", "white", "purple", "deeppink", "gold", "orange", "yellow"];
    return color[Math.floor(Math.random()*color.length)];
}


//distance between two points
export function calculateDistance(x1: number, y1: number, x2:number, y2:number): number{
    const distanceX: number = x2-x1;
    const distanceY: number = y2-y1;

    return Math.sqrt(Math.pow(distanceX, 2) + Math.pow(distanceY, 2));
}

