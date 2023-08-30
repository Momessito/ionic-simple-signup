import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.page.html',
  styleUrls: ['./editar.page.scss'],
})
export class EditarPage implements OnInit {
  titulo : any;
  autor : any;
  paginas : any;



  constructor(private ActivedRotas : ActivatedRoute, public rotas : Router) { }

  Voltar(){
    this.rotas.navigateByUrl(`/home`)
  }
  Proximo(){
    this.rotas.navigateByUrl(`/confirmar/${this.titulo}`)
  }

  ngOnInit() {
    this.titulo = this.ActivedRotas.snapshot.paramMap.get('titulo');
    this.autor = this.ActivedRotas.snapshot.paramMap.get('autor');
    this.paginas = this.ActivedRotas.snapshot.paramMap.get('paginas');
  }
}
