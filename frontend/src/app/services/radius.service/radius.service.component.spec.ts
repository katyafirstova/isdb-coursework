import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadiusService} from './radius.service';

describe('RadiusService', () => {
  let component: RadiusService;
  let fixture: ComponentFixture<RadiusService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RadiusService ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RadiusService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
