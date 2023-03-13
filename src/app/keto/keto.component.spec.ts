import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KetoComponent } from './keto.component';

describe('KetoComponent', () => {
  let component: KetoComponent;
  let fixture: ComponentFixture<KetoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KetoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KetoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
