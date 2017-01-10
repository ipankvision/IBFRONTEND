import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { InputTransferComponent } from './input-transfer/input-transfer.component';
import { KonfirmasiTransferComponent } from './konfirmasi-transfer/konfirmasi-transfer.component';
import { RekeningModule } from '../rekening/rekening.module';

const route: Route[] = [
  { path: 'transfer/input', component: InputTransferComponent },
  { path: 'transfer/konfirmasi', component: KonfirmasiTransferComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(route),
    RekeningModule
  ],
  declarations: [InputTransferComponent, KonfirmasiTransferComponent]
})
export class TransferModule { }
