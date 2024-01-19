import { getRandomColor, setStyles } from "../utils/utils.ts";
// import { IwallCollision } from "../interface.ts";

export interface IBall {
    x: number;
    y: number;
    radius: number;
    speedX: number;
    speedY: number;
    element: HTMLElement;

    getX: () => number;
    getY: () => number;
    getRadius: () => number;

    setX: (x: number) => void;
    setY: (y: number) => void;
    setRadius: (radius: number) => void;

    move: () => void;
    draw: () => void;

    checkWallCollison: (borderLeft: number, borderRight: number, borderWidth: number, borderHeight: number) => void;
    checkBallCollision: (ball: Ball) => void;
}

export class Ball implements IBall {
    x: number;
    y: number;
    radius: number;
    diameter: number;
    speedX: number;
    speedY: number;
    element: HTMLElement;

    constructor(x: number, y: number, radius: number, speedX: number, speedY: number) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.diameter = radius * 2;


        this.speedX = speedX;
        this.speedY = speedY;

        this.element = document.createElement("div");
        this.element.classList.add("ball");


        setStyles(this.element, {
            width: `${this.diameter}px`,
            height: `${this.diameter}px`,
            backgroundColor: getRandomColor(),
        });
    }

    getElement(): HTMLElement {
        return this.element;
    }

    //getter
    getX = () => this.x;
    getY = () => this.y;
    getRadius = () => this.radius;


    setX = (x: number) => this.x = x;
    setY = (y: number) => this.y = y;
    setRadius = (radius: number) => this.radius = radius;


    move = () => {
        this.x += this.speedX;
        this.y += this.speedY;

        // collisionDetectBorder(this, 0, 0, window.innerWidth, window.innerHeight);
    };

    //draw the ball on the screen
    draw = () => {
        this.element.style.left = `${this.x}px`;
        this.element.style.top = `${this.y}px`;
    };

    checkWallCollison = (borderLeft: number, borderTop: number, borderWidth: number, borderHeight: number) => {
        if (this.x < borderLeft) {
            this.speedX = Math.abs(this.speedX);
        }
        if (this.x > borderWidth - this.radius) {
            this.speedX = -Math.abs(this.speedX);
        }
        if (this.y < borderTop) {
            this.speedY = Math.abs(this.speedY);
        }
        if (this.y > borderHeight - this.radius) {
            this.speedY = -Math.abs(this.speedY);
        }
    };


    checkBallCollision = (ball: Ball) => {
        const dx = ball.x - this.x;
        const dy = ball.y - this.y;
    
        const distance = Math.sqrt(dx * dx + dy * dy);
    
        if (distance <= this.radius + ball.radius) {
            const overlap: number = this.radius + ball.radius - distance;
    
            // Calculate the unit vector
            const normalX = dx / distance;
            const normalY = dy / distance;
    
            // Separate the balls by adjusting their position
            this.x -= overlap * normalX * 0.5;
            this.y -= overlap * normalY * 0.5;
            ball.x += overlap * normalX * 0.5;
            ball.y += overlap * normalY * 0.5;

            
            this.speedX = -this.speedX;
            ball.speedX = -this.speedX;
            this.speedY = -this.speedY;
            ball.speedY = -this.speedY;
        }
    };
}