import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConnexionClientPage } from './connexion-client.page';

describe('ConnexionClientPage', () => {
  let component: ConnexionClientPage;
  let fixture: ComponentFixture<ConnexionClientPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConnexionClientPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConnexionClientPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
