import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentVerbComponent } from './present-verb.component';

describe('PresentVerbComponent', () => {
  let component: PresentVerbComponent;
  let fixture: ComponentFixture<PresentVerbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresentVerbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentVerbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
