import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversacionComponent } from './conversacion.component';
import { MatSidenavModule } from '@angular/material/sidenav';


describe('ConversacionComponent', () => {
  let component: ConversacionComponent;
  let fixture: ComponentFixture<ConversacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ MatSidenavModule ],
      declarations: [ ConversacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConversacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
