import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryBarComponent } from './categoryBar.component';
import { HomeModule } from '../../home.module';

describe('CategoryBarComponent', () => {
  let component: CategoryBarComponent;
  let fixture: ComponentFixture<CategoryBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeModule],
    }).compileComponents();

    fixture = TestBed.createComponent(CategoryBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
