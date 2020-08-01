import { ActualizarPerfilPresentVerb } from './actualizar-perfil-present-verb';
import { async } from '@angular/core/testing';
import { PresentVerbAprenderComponent } from './present-verb-aprender.component';

describe('ActualizarPerfilPresentVerb', () => {

  let app: PresentVerbAprenderComponent;

  beforeEach(async( ()=> {
    app = new PresentVerbAprenderComponent();
  }))

  it('should create an instance', async(() => {
    expect(app.).toBeTruthy();
  }));
});
