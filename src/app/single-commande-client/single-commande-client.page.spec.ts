import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SingleCommandeClientPage } from './single-commande-client.page';

describe('SingleCommandeClientPage', () => {
  let component: SingleCommandeClientPage;
  let fixture: ComponentFixture<SingleCommandeClientPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleCommandeClientPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SingleCommandeClientPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
