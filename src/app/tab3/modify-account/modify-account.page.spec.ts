import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModifyAccountPage } from './modify-account.page';

describe('ModifyAccountPage', () => {
  let component: ModifyAccountPage;
  let fixture: ComponentFixture<ModifyAccountPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifyAccountPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModifyAccountPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
