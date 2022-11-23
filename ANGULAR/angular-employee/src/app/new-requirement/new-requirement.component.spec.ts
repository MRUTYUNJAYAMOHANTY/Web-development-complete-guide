import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRequirementComponent } from './new-requirement.component';

describe('NewRequirementComponent', () => {
  let component: NewRequirementComponent;
  let fixture: ComponentFixture<NewRequirementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NewRequirementComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewRequirementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
