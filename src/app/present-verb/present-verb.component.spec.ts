import { ComponentFixture, TestBed, async } from "@angular/core/testing";
import { PresentVerbComponent } from "./present-verb.component";
import { MockStore, provideMockStore } from "@ngrx/store/testing";
import { AudioService } from "../comun/audio/audio.service";
import { PresentVerbService } from "./present-verb.service";
import { MatSidenavModule } from '@angular/material/sidenav';
import { Store } from "@ngrx/store";
import { Usuario } from "../dominio/usuario/usuario.model";

fdescribe('PresentVerbComponent', () => {
    let component: PresentVerbComponent;
    let fixture: ComponentFixture<PresentVerbComponent>;
    let audioService: jasmine.SpyObj<AudioService>;
    let presentVerbService: jasmine.SpyObj<PresentVerbService>;
    const initialState = { loggedIn: true };
    let store: MockStore<{ loggedIn: boolean}>;


    beforeEach(async(() => {
        TestBed.configureTestingModule({
          imports: [ MatSidenavModule ],
          declarations: [ PresentVerbComponent ],
          providers: [
            provideMockStore({ initialState }),
            { provide: AudioService, useValue: audioService },
            { provide: PresentVerbService, useValue: presentVerbService },
          ]
        })
        .compileComponents();
      }));
    
      beforeEach(() => {
        fixture = TestBed.createComponent(PresentVerbComponent);
        component = fixture.componentInstance;
        store = TestBed.get(Store);
        fixture.detectChanges();
      });

      it('should create', () => {
        expect(component).toBeTruthy();
      });


      it('PresentVerbComponent::getNumeroPalabras', () => {
        component.usuario = new Usuario();
        expect(component.usuario).not.toBeNull();
        expect(component.usuario.sistema).not.toBeNull();
        expect(component.usuario.sistema.hojaSeleccionado).not.toBeNull();
        expect(component.usuario.sistema.hojaSeleccionado.rutina).not.toBeNull();
        component.usuario.sistema.hojaSeleccionado.rutina = {
          ...component.usuario.sistema.hojaSeleccionado.rutina,
          english: [
            'sympathy for the loss',
            'through empathy'
          ],
          indiceVerboValidar: 0
        }
        expect(component.usuario.sistema.hojaSeleccionado.rutina.english.length).toBe(2);
        expect(component.usuario.sistema.hojaSeleccionado.rutina.indiceVerboValidar).toBe(0);

        component.getNumeroPalabras();

        // english[0] = 'sympathy for the loss'
        expect(component.numeroPalabras).toBe(4);
      });

})