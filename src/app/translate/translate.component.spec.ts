import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslateComponent } from './translate.component';
import { PresentVerbService } from '../present-verb/present-verb.service';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { MatSidenavModule } from '@angular/material/sidenav';

describe('TranslateComponent', () => {
  let component: TranslateComponent;
  let fixture: ComponentFixture<TranslateComponent>;
  let presentVerbService: jasmine.SpyObj<PresentVerbService>;
  let store: MockStore<{ loggedIn: boolean}>;
  const initialState = { loggedIn: false };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ MatSidenavModule ],
      declarations: [ TranslateComponent ],
      providers: [
        provideMockStore({ initialState }),
        { provide: PresentVerbService, useValue: presentVerbService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TranslateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
