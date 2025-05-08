import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryPageComponent } from './deliveryPage.component';
import { DeliveryModule } from '../delivery.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('DeliveryComponent', () => {
  let component: DeliveryPageComponent;
  let fixture: ComponentFixture<DeliveryPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeliveryModule, HttpClientTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(DeliveryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
