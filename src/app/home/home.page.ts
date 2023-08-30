import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})



export class HomePage {
titulo = '';
autor = '';
paginas = '';

constructor(public rotas : Router) {}

Cadastrar(){
  this.rotas.navigateByUrl(`/editar/${this.titulo}/${this.autor}/${this.paginas}`)
}
}
