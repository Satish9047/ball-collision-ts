interface IBall {
    x: number;
    y: number;
    radius: number;
    color: string
}

export class Ball implements IBall{
    x: number;
    y: number;
    radius: number;
    color: string;
    constructor(x: number, y: number, radius: number, color: string) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
    }
}