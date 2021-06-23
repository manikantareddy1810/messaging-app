import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradeProcessorComponent } from './trade-processor.component';

describe('TradeProcessorComponent', () => {
  let component: TradeProcessorComponent;
  let fixture: ComponentFixture<TradeProcessorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TradeProcessorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TradeProcessorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
