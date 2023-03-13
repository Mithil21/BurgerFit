import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VegBurgerComponent } from './veg-burger.component';

describe('VegBurgerComponent', () => {
  let component: VegBurgerComponent;
  let fixture: ComponentFixture<VegBurgerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VegBurgerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VegBurgerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
