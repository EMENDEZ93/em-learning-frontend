import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrerComponent } from './registrer.component';
import { RegistrerService } from './registrer.service';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('RegistrerComponent', () => {
  let component: RegistrerComponent;
  let fixture: ComponentFixture<RegistrerComponent>;
  let registerServices: jasmine.SpyObj<RegistrerService>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ ReactiveFormsModule ],
      declarations: [ RegistrerComponent ],
      providers: [
        { provide: RegistrerService, useValue: registerServices }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Formulario Nombre Invalido', () => {
    component.registrerFormGroup.get('nombre')?.setValue('');
    expect(component.registrerFormGroup.get('nombre')?.invalid)
    .withContext('Nombre Invalido')
    .toBeTruthy();

    component.registrerFormGroup.get('nombre')?.setValue('123456');
    expect(component.registrerFormGroup.get('nombre')?.valid)
    .withContext('Nombre Valido')
    .toBeTruthy();
  });

  it('Formulario', () => {
    component.registrerFormGroup.patchValue({
      nombre: 'Nombre',
      correo: 'correo@gmail.com',
      password: 'password'
    });
    expect(component.registrerFormGroup.invalid).toBeTruthy();
  });

  fit('Formulario', () => {
    const inputNombre = fixture.debugElement.query(By.css(`[data-testid=nombre]`));
    const nombreElement: HTMLInputElement = inputNombre.nativeElement;
    nombreElement.value = "Valor Nombre";
    nombreElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(component.registrerFormGroup.get('nombre')?.valid)
    .withContext('Nombre valido')
    .toBeTruthy();
    expect(component.registrerFormGroup.get('nombre')?.value)
    .withContext('Validar Contenido')
    .toBe("Valor Nombre");
  });

  it('Formulario', () => {
    component.registrerFormGroup.patchValue({
      nombre: 'Nombre',
      correo: 'correo@gmail.com',
      password: 'password'
    });

    // ejemplo cuando la funcion recibe un evento
    //component.crearusuario(new Event('submit'));
    expect(component.registrerFormGroup.invalid).toBeTruthy();
  });

});
