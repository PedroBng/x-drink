import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LivreurGeolocalisationPage } from './livreur-geolocalisation.page';

describe('LivreurGeolocalisationPage', () => {
  let component: LivreurGeolocalisationPage;
  let fixture: ComponentFixture<LivreurGeolocalisationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LivreurGeolocalisationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LivreurGeolocalisationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
