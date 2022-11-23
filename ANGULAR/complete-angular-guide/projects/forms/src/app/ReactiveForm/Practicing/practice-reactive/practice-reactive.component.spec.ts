import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeReactiveComponent } from './practice-reactive.component';

describe('PracticeReactiveComponent', () => {
  let component: PracticeReactiveComponent;
  let fixture: ComponentFixture<PracticeReactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PracticeReactiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PracticeReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
