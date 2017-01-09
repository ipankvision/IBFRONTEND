import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AccordionModule } from 'ng2-bootstrap/accordion';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MenuSampingComponent } from './menu-samping/menu-samping.component';
import { SelamatDatangComponent } from './selamat-datang/selamat-datang.component';
import { MenuAtasComponent } from './menu-atas/menu-atas.component';
import { RekeningModule } from './rekening/rekening.module';
import { TransferComponent } from './transfer/transfer.component';
import { ProfilComponent } from './profil/profil.component';


const route: Routes = [
  { path: 'rekening', redirectTo: "/rekening", pathMatch: "full" },
  { path: 'transfer', component: TransferComponent },
  { path: 'profil', component: ProfilComponent},
  { path: '**', component: SelamatDatangComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MenuSampingComponent,
    SelamatDatangComponent,
    MenuAtasComponent,
    TransferComponent,
    ProfilComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AccordionModule.forRoot(),
    RouterModule.forRoot(route),
    RekeningModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
