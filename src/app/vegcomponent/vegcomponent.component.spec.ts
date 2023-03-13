import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VegcomponentComponent } from './vegcomponent.component';

describe('VegcomponentComponent', () => {
  let component: VegcomponentComponent;
  let fixture: ComponentFixture<VegcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VegcomponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VegcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
