import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DaftarrekeningComponent } from './daftarrekening/daftarrekening.component';
import { DetailrekeningComponent } from './detailrekening/detailrekening.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DaftarrekeningComponent, DetailrekeningComponent]
})
export class RekeningModule { }
