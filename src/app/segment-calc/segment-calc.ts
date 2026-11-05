import { Component } from '@angular/core';
import { Segment } from '../Class/segment';
import { Line } from '../Class/line';

@Component({
    imports: [],
    selector: 'app-segment-calc',
    styleUrl: './segment-calc.css',
    templateUrl: './segment-calc.html',
})

export class SegmentCalc {
    segment_show: string = '';
    line_show: string = '';
    line_color: string = '';
    error: string = '';

    calcSegments (name1: string, x1: string, y1: string, x2: string, y2: string, 
                  name2: string, x3: string, y3: string, x4: string, y4: string,
                  color: string, n: string) {

        this.error = '';

        try {
            let segment = new Segment(name1, parseFloat(x1), parseFloat(y1), parseFloat(x2), parseFloat(y2));
            let line = new Line(name2, parseFloat(x3), parseFloat(y3), parseFloat(x4), parseFloat(y4), color, parseFloat(n));
        
            this.segment_show = 'Довжина відрізка ' + segment.name + ' = ' + segment.Length();
            this.line_show = 'Довжина лінії ' + line.name + ' (збільшено в ' + line.n + ' р.) = ' + line.Length();
            this.line_color = color;
        }
        catch (e:any) {
            this.segment_show = '';
            this.line_show = '';
            this.error = e.message;
        }
    }
}
