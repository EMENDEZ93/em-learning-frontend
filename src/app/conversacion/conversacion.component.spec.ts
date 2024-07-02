import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversacionComponent } from './conversacion.component';
import { AppState } from '../dominio/estado/estado.reducer';
import { Store } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { AudioService } from '../comun/audio/audio.service';
import { ConversacionService } from './conversacion.service';
import { MatSidenavModule } from '@angular/material/sidenav';


describe('ConversacionComponent', () => {
  let component: ConversacionComponent;
  let fixture: ComponentFixture<ConversacionComponent>;
  let store: MockStore<{ loggedIn: boolean}>;
  let audioService: jasmine.SpyObj<AudioService>;
  let conversacionService: jasmine.SpyObj<ConversacionService>;
  const initialState = { loggedIn: false };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ MatSidenavModule ],
      declarations: [ ConversacionComponent ],
      providers: [
        provideMockStore({ initialState }),
        { provide: AudioService, useValue: audioService },
        { provide: ConversacionService, useValue: conversacionService },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConversacionComponent);
    component = fixture.componentInstance;
    conversacionService
    store = TestBed.get(Store);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
