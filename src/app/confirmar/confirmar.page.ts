import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirmar',
  templateUrl: './confirmar.page.html',
  styleUrls: ['./confirmar.page.scss'],
})
export class ConfirmarPage implements OnInit {
  titulo : any;
  constructor(private rota : ActivatedRoute) { }

  ngOnInit() {
    this.titulo = this.rota.snapshot.paramMap.get('titulo')
  }

}
