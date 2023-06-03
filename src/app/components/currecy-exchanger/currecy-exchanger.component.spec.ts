import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrecyExchangerComponent } from './currecy-exchanger.component';

describe('CurrecyExchangerComponent', () => {
  let component: CurrecyExchangerComponent;
  let fixture: ComponentFixture<CurrecyExchangerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrecyExchangerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrecyExchangerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
