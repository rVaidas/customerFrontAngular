import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { TableModule } from 'primeng/table';
import { PopUpFormComponent } from './components/pop-up-form/pop-up-form.component';

import { DialogModule } from 'primeng/dialog';

@NgModule({
  declarations: [AppComponent, PopUpFormComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TableModule,
    DialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
