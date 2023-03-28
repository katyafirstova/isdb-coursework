import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadiusServiceComponent } from './radius-service.component';

describe('RadiusServiceComponent', () => {
  let component: RadiusServiceComponent;
  let fixture: ComponentFixture<RadiusServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RadiusServiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RadiusServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
