import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeTdComponent } from './practice-td.component';

describe('PracticeTdComponent', () => {
  let component: PracticeTdComponent;
  let fixture: ComponentFixture<PracticeTdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PracticeTdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PracticeTdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
