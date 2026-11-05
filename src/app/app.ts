import { Component } from '@angular/core';
import { Header } from './header/header';
import { SegmentCalc } from './segment-calc/segment-calc';

@Component({
  selector: 'app-root',
  imports: [Header, SegmentCalc],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'laba6';
}