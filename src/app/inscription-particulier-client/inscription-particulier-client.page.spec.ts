import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InscriptionParticulierClientPage } from './inscription-particulier-client.page';

describe('InscriptionParticulierClientPage', () => {
  let component: InscriptionParticulierClientPage;
  let fixture: ComponentFixture<InscriptionParticulierClientPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InscriptionParticulierClientPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InscriptionParticulierClientPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
