import {getRandomNumber} from "../utils/utils.ts";

export interface IBall {
    x: number;
    y: number;
    radius: number;
    color: string
    speedX: number;
    speedY: number;
    element: HTMLElement;

    getX: ()=>number;
    getY: ()=>number;
    getRadius: ()=>number;
    getColor: ()=>string;

    setX: (x:number)=>void;
    setY: (y:number)=>void;
    setRadius: (radius: number)=>void;
    setColor: (color: string)=> string;

    move: ()=>void;
    draw: ()=>void;

    checkBallCollision: (ball: Ball)=>void;
}

export class Ball implements IBall{
    x: number;
    y: number;
    radius: number;
    color: string;
    speedX: number;
    speedY: number;
    element: HTMLElement;

    constructor(x: number, y: number, radius: number, color: string) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;

        this.speedX = getRandomNumber(-5, 5);
        this.speedY = getRandomNumber(-5, 5);

        this.element = document.createElement("div");
        this.element.classList.add("ball");


    }

    getElement(): HTMLElement{
        return this.element;
    }

    //getter
    getX = () => this.x;
    getY = () => this.y;
    getRadius = () => this.radius;
    getColor = () => this.color;

    setX = (x: number) => this.x = x;
    setY = (y: number) => this.y = y;
    setRadius = (radius: number) => this.radius =radius;
    setColor = (color: string) => this.color = color;

    move = ()=>{
        this.x += this.speedX;
        this.y += this.speedY;

        collisionDetectBorder(this, 0, 0, window.innerWidth, window.innerHeight);
    };

    draw = ()=>{
        this.element.style.left = `${this.x}px`;
        this.element.style.top = `${this.y}px`;
    };

    checkBallCollision = (ball: Ball)=>{
        const dx = ball.x - this.x;
        const dy = ball.y - this.y;

        const distance = Math.sqrt(dx*dx + dy*dy);

        if(distance < this.radius + ball.radius){
            const overlap: number = this.radius + ball.radius - distance;

            // Calculate the unit vector
            const normalX = dx / distance;
            const normalY = dy / distance;

            // Separate the balls by adjusting their direction
            this.x -= overlap * normalX * 0.5;
            this.y -= overlap * normalY * 0.5;
            ball.x += overlap * normalX * 0.5;
            ball.y += overlap * normalY * 0.5;
        }
    };
}

// wall collision
export function collisionDetectBorder(ball: Ball, boundaryLeft: number, boundaryTop: number, boundaryWidth: number, boundaryHeight: number): void {
    if (ball.x - ball.radius < boundaryLeft || ball.x + ball.radius > boundaryWidth) {
        ball.speedX *= -1;
    }
    if (ball.y - ball.radius < boundaryTop || ball.y + ball.radius > boundaryHeight) {
        ball.speedY *= -1;
    }
}