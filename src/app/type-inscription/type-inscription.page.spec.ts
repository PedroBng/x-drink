import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TypeInscriptionPage } from './type-inscription.page';

describe('TypeInscriptionPage', () => {
  let component: TypeInscriptionPage;
  let fixture: ComponentFixture<TypeInscriptionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeInscriptionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TypeInscriptionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
