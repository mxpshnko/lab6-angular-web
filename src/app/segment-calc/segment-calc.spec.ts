import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SegmentCalc } from './segment-calc';

describe('SegmentCalc', () => {
  let component: SegmentCalc;
  let fixture: ComponentFixture<SegmentCalc>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SegmentCalc],
    }).compileComponents();

    fixture = TestBed.createComponent(SegmentCalc);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
