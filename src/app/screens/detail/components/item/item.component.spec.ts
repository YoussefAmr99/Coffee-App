import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemComponent } from './item.component';
import { DetailModule } from '../../detail.module';

describe('ItemComponent', () => {
  let component: ItemComponent;
  let fixture: ComponentFixture<ItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ItemComponent);
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
