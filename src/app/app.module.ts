import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireDatabaseModule } from "@angular/fire/compat/database";

import { environment } from '../environment';
import { ListJogoComponent } from './jogo/list-jogo/list-jogo.component';
import { AddJogoComponent } from './jogo/add-jogo/add-jogo.component';
import { EditJogoComponent } from './jogo/edit-jogo/edit-jogo.component';

import { AppRoutingModule } from './app-routing.module';

import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    ListJogoComponent,
    AddJogoComponent,
    EditJogoComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AppRoutingModule,
    //MENSAGENS TOAST
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    // REACTIVE FORMS
    FormsModule,
    ReactiveFormsModule,
    // PAGINATION
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
