export function getRandomSpeed (min: number, max: number): number{
    return Math.floor(Math.random()*(max-min + 5) + min);

}

