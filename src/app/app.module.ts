import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListeComponent } from './liste/liste.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AccueilComponent } from './accueil/accueil.component';
import { AproposComponent } from './apropos/apropos.component';
import { ListeEditComponent } from './liste/liste-edit/liste-edit.component';
import { ObservableComponent } from './observable/observable.component';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    ListeComponent,
    AccueilComponent,
    AproposComponent,
    ListeEditComponent,
    ObservableComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
