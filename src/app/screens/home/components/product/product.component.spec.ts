import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductComponent } from './product.component';
import { HomeModule } from '../../home.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeModule, HttpClientTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
    component.product = {
      id: 1,
      name: 'coffee',
      description: 'a cup of hot coffee',
      state: 'Hot',
      rating: 4,
      ratingCount: 190,
      category: 'Espresso',
      price: 4,
      longDescription: 'a cup of hote coffee served with a small biscuit',
      imageUrl: 'images/coffeeOne.svg',
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
