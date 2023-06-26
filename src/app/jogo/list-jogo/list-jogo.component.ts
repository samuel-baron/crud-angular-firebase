import { ToastrService } from 'ngx-toastr';
import { JogoService } from './../jogo.service';
import { Jogo } from './../jogo';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-jogo',
  templateUrl: './list-jogo.component.html',
  styleUrls: ['./list-jogo.component.css']
})
export class ListJogoComponent implements OnInit {
  page = 1;
  listaJogo: Jogo[] = [];
  listaVazia: Boolean = true;
  mostrarLoader: Boolean = true;

  //DI - Depency Injection
  constructor(
    private jogoService: JogoService,
    private toastr: ToastrService) { }


  ngOnInit() {
    let fetchData = this.jogoService.getJogoList();
    //Lambda
    fetchData.snapshotChanges().subscribe(data => {
      this.listaJogo = [];
      if (data.length <= 0)
        this.listaVazia = true;
      else {
        this.listaVazia = false;
        data.forEach((item: any) => {
          let jogo = item.payload.toJSON();
          jogo['$key'] = item.key;
          this.listaJogo.push(jogo as Jogo);
        });
      }
    });
    this.mostrarLoader = false;
  }

  deleteJogo(jogo: Jogo) {
    if (window.confirm("Tem certeza que deseja remover o jogo?")) {
      if (jogo.$key != null) {
        this.jogoService.deleteJogo(jogo.$key);
        this.toastr.success(jogo.nome + " removido com sucesso.");
      }
    }
  }


}
