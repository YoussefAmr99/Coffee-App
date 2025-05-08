import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainButtonComponent } from './components/mainButton/mainButton.component';
import { HeaderComponent } from './components/header/header.component';
import { QuantityComponent } from './components/quantity/quantity.component';

@NgModule({
  declarations: [MainButtonComponent, HeaderComponent, QuantityComponent],
  providers: [CommonModule],
  imports: [CommonModule],
  exports: [MainButtonComponent, HeaderComponent, QuantityComponent],
})
export class SharedModule {}
