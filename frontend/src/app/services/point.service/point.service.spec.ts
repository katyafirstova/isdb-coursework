import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PointService } from './point.service';

describe('PointServiceComponent', () => {
  let component: PointService;
  let fixture: ComponentFixture<PointService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PointService ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PointService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
