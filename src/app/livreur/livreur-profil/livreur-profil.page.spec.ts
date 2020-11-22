import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LivreurProfilPage } from './livreur-profil.page';

describe('LivreurProfilPage', () => {
  let component: LivreurProfilPage;
  let fixture: ComponentFixture<LivreurProfilPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LivreurProfilPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LivreurProfilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
