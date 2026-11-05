import { Segment } from './segment';

export class Line extends Segment {
    color: string;
    n: number;

    constructor(name: string, x1: number, y1: number, x2: number, y2: number, color: string, n: number) {
    
        super(name, x1, y1, x2, y2);
    
        if (isNaN(n) || n <= 0) {
            throw new Error('Коефіцієнт n має бути більшим за 0!');
        }

        this.color = color;
        this.n = n;
    }

    override Length(): number {
        return super.Length() * this.n;
    }
}