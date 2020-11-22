import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CodeDeVentePage } from './code-de-vente.page';

describe('CodeDeVentePage', () => {
  let component: CodeDeVentePage;
  let fixture: ComponentFixture<CodeDeVentePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeDeVentePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CodeDeVentePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
