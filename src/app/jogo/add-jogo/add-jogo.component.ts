import { JogoService } from './../jogo.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-jogo',
  templateUrl: './add-jogo.component.html',
  styleUrls: ['./add-jogo.component.css']
})
export class AddJogoComponent implements OnInit {
  jogoForm: FormGroup;

  constructor(
    private jogoService: JogoService,
    private fb: FormBuilder,
    private toastr: ToastrService
  ) {
    this.jogoForm = this.createForm();
  }

  createForm() {
    return this.fb.group({
      nome: new FormControl('', Validators.required),
      plataforma: new FormControl('', Validators.required),
      preco: ['', [Validators.required, Validators.min(0)]]
    });
  }

  ngOnInit() {
    this.jogoService.getJogoList();
  }

  resetForm() {
    this.jogoForm.reset();
  }

  submitForm() {
    this.jogoService.insertJogo(this.jogoForm.value);
    this.toastr.success(
      this.jogoForm.controls['nome'].value + " adicionado."
    );
  }

  get nome() {
    return this.jogoForm.get('nome');
  }

  get plataforma() {
    return this.jogoForm.get('plataforma');
  }

  get preco() {
    return this.jogoForm.get('preco');
  }
}
