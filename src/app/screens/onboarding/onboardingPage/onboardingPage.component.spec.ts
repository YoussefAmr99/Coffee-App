import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardingPageComponent } from './onboardingPage.component';

describe('OnboardingComponent', () => {
  let component: OnboardingPageComponent;
  let fixture: ComponentFixture<OnboardingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnboardingPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OnboardingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
