import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TypeClientPage } from './type-client.page';

describe('TypeClientPage', () => {
  let component: TypeClientPage;
  let fixture: ComponentFixture<TypeClientPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeClientPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TypeClientPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
