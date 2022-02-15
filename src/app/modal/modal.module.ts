import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalComponent } from './modal.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [
    CommonModule, 
    FontAwesomeModule
  ],
  declarations: [ModalComponent],
  exports: [ModalComponent]
})
export class ModalModule { }