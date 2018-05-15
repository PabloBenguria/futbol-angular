import { Component, OnInit } from '@angular/core';

import { JugadorService } from '../../services/jugador.service';

@Component({
  selector: 'app-jugadores',
  templateUrl: './jugador-list.component.html',
  styleUrls: ['./jugador-list.component.css']
})
export class JugadorListComponent implements OnInit {

	jugadores: Array<any>;

  constructor(private jugadorService: JugadorService) { }

  ngOnInit() {
  	this.jugadorService.getAll().subscribe(data => {
      this.jugadores = data;
    });
  }

}
