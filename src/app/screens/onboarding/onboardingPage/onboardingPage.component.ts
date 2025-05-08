import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-onboarding',
  imports: [SharedModule],
  templateUrl: './onboardingPage.component.html',
  styleUrl: './onboardingPage.component.scss',
})
export class OnboardingPageComponent {
  constructor(private router: Router) {}

  onButtonClick(): void {
    this.router.navigateByUrl('/home');
  }
}
