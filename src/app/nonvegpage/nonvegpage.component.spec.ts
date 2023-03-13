import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonvegpageComponent } from './nonvegpage.component';

describe('NonvegpageComponent', () => {
  let component: NonvegpageComponent;
  let fixture: ComponentFixture<NonvegpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NonvegpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NonvegpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
