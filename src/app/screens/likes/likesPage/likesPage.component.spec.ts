import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikesPageComponent } from './likesPage.component';
import { LikesModule } from '../likes.module';

describe('LikesPageComponent', () => {
  let component: LikesPageComponent;
  let fixture: ComponentFixture<LikesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LikesModule],
    }).compileComponents();

    fixture = TestBed.createComponent(LikesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
