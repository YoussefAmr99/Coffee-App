import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MethodComponent } from './method.component';
import { OrderModule } from '../../order.module';

describe('MethodComponent', () => {
  let component: MethodComponent;
  let fixture: ComponentFixture<MethodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderModule],
    }).compileComponents();

    fixture = TestBed.createComponent(MethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
