import { Component, OnInit } from '@angular/core';

import { JugadorService } from '../../services/jugador.service';
import { Jugador } from '../../models/jugador';

@Component({
  selector: 'app-jugador-create',
  templateUrl: './jugador-create.component.html',
  styleUrls: ['./jugador-create.component.css']
})
export class JugadorCreateComponent implements OnInit {

	jugador: Jugador;

  constructor(private jugadorService: JugadorService) { }

  ngOnInit() {
  }

  onSaveJugador(){
    this.jugadorService.saveJugador(this.jugador);
  }

}
