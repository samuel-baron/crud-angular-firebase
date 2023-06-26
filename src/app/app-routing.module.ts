import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';

import { AddJogoComponent } from './jogo/add-jogo/add-jogo.component';
import { ListJogoComponent } from './jogo/list-jogo/list-jogo.component';
import { EditJogoComponent } from './jogo/edit-jogo/edit-jogo.component';

const routes: Routes = [
  { path: '', redirectTo: '/list-jogo', pathMatch: 'full' },
  { path: 'add-jogo', component: AddJogoComponent },
  { path: 'list-jogo', component: ListJogoComponent },
  { path: 'edit-jogo/:id', component: EditJogoComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})

export class AppRoutingModule { }