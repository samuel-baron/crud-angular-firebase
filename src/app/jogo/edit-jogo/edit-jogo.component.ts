import { ToastrService } from 'ngx-toastr';
import { JogoService } from './../jogo.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit-jogo',
  templateUrl: './edit-jogo.component.html',
  styleUrls: ['./edit-jogo.component.css']
})
export class EditJogoComponent implements OnInit {
  jogoForm: FormGroup;

  constructor(
    private jogoService: JogoService,
    private fb: FormBuilder,
    private location: Location,
    private activeRoute: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService
  ) {
    this.jogoForm = this.createForm();
  }

  createForm() {
    return this.fb.group({
      nome: new FormControl('', Validators.required),
      plataforma: new FormControl('', Validators.required),
      preco: new FormControl('', [Validators.required, Validators.pattern('^[0-9]+$')])
    });
  }


  ngOnInit() {
    //ler ID
    const id = this.activeRoute.snapshot.paramMap.get('id');

    //ANGULAR FIRE
    if (id != null) {
      this.jogoService.getJogoById(id).valueChanges().subscribe(data => {
        this.jogoForm.setValue(data as any);//JSON
      });
    }
  }

  submitForm() {
    this.jogoService.updateJogo(this.jogoForm.value);
    this.toastr.success(
      this.jogoForm.controls['nome'].value + " atualizado."
    );
    this.router.navigate(['list-jogo']);
  }

  goBack() {
    this.location.back();
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
