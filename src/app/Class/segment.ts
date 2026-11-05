export class Segment {
    name: string;
    x1: number;
    y1: number;
    x2: number;
    y2: number;

    constructor(name: string, x1: number, y1: number, x2: number, y2: number) {
        if (name.trim() === '') {
            throw new Error('Введіть назву відрізка!');
        }

        if (isNaN(x1) || isNaN(y1) || isNaN(x2) || isNaN(y2)) {
            throw new Error('Координати мають бути числами!');
        }

        if (x1 === x2 && y1 === y2) {
            throw new Error('Точки відрізка не можуть збігатись!');
        }

        this.name = name;
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
    }

    Length(): number {
        return Math.sqrt(Math.pow(this.x2 - this.x1, 2) + Math.pow(this.y2 - this.y1, 2));
    }
}