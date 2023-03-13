import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KetopageComponent } from './ketopage.component';

describe('KetopageComponent', () => {
  let component: KetopageComponent;
  let fixture: ComponentFixture<KetopageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KetopageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KetopageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
