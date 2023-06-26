import { Injectable } from '@angular/core';

//ANGULAR FIRE
import { AngularFireList, AngularFireObject, AngularFireDatabase } from '@angular/fire/compat/database';

import { Jogo } from './jogo';

@Injectable({
  providedIn: 'root'
})
export class JogoService {
  listaJogosRef: AngularFireList<Jogo>;
  jogoRef: AngularFireObject<Jogo>;

  constructor(private db: AngularFireDatabase) {
    this.listaJogosRef = this.db.list('list-jogo');
    this.jogoRef = this.db.object('list-jogo/' + 0);
  }

  //CREATE RUD
  insertJogo(jogo: Jogo) {
    this.listaJogosRef.push(
      {
        nome: jogo.nome,
        plataforma: jogo.plataforma,
        preco: jogo.preco
      }
    );
  }

  //C Read UD
  getJogoById(id: string): AngularFireObject<Jogo> {
    this.jogoRef = this.db.object('list-jogo/' + id);
    return this.jogoRef;
  }

  getJogoList(): AngularFireList<Jogo> {
    return this.listaJogosRef;
  }

  //CR Update D
  updateJogo(jogo: Jogo) {
    this.jogoRef.update({
      nome: jogo.nome,
      plataforma: jogo.plataforma,
      preco: jogo.preco
    });
  }

  //CRU Delete
  deleteJogo(id: String) {
    this.jogoRef = this.db.object('list-jogo/' + id);
    this.jogoRef.remove();
  }

}
