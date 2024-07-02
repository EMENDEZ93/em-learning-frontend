import { TestBed } from '@angular/core/testing';

import { RegistrerService } from './registrer.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { of } from 'rxjs';
import { ReactiveFormsModule } from '@angular/forms';


describe('RegistrerService', () => {
  let httpTestingController: HttpTestingController;
  let registrerService: jasmine.SpyObj<RegistrerService>;
  let service: RegistrerService;
  let mockAuth: any;

  beforeEach(() => {
    const registrerServiceSpy = jasmine.createSpyObj('RegistrerService', ['crearUsuario']);
    mockAuth = {
      createUserWithEmailAndPassword: jasmine.createSpy('createUserWithEmailAndPassword')
      .and.returnValue(of({}))
    }
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule, ReactiveFormsModule ],
      providers: [
        { provide: AngularFireAuth, useValue: mockAuth },
        { provide: RegistrerService, useValue: registrerServiceSpy }
      ]
    });  
    service = TestBed.inject(RegistrerService);

  }
  );

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Formulario', () => {

  });

});
