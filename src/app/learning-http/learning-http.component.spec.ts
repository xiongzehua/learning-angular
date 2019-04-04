import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningHttpComponent } from './learning-http.component';

describe('LearningHttpComponent', () => {
  let component: LearningHttpComponent;
  let fixture: ComponentFixture<LearningHttpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearningHttpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearningHttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
