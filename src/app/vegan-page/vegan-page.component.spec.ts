import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeganPageComponent } from './vegan-page.component';

describe('VeganPageComponent', () => {
  let component: VeganPageComponent;
  let fixture: ComponentFixture<VeganPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VeganPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VeganPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
