import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeakingComponent } from './speaking.component';
import { PresentVerbService } from '../present-verb/present-verb.service';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { MatSidenavModule } from '@angular/material/sidenav';

describe('SpeakingComponent', () => {
  let component: SpeakingComponent;
  let fixture: ComponentFixture<SpeakingComponent>;
  let presentVerbService: jasmine.SpyObj<PresentVerbService>;
  let store: MockStore<{ loggedIn: boolean}>;
  const initialState = { loggedIn: false };


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ MatSidenavModule ],
      declarations: [ SpeakingComponent ],
      providers: [
        provideMockStore({ initialState }),
        { provide: PresentVerbService, useValue: presentVerbService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeakingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
