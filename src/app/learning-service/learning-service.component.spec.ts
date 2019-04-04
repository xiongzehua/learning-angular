import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningServiceComponent } from './learning-service.component';

describe('LearningServiceComponent', () => {
  let component: LearningServiceComponent;
  let fixture: ComponentFixture<LearningServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearningServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearningServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
