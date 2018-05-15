import { Component, OnInit } from '@angular/core';

import { Estadistica } from '../../models/estadistica';
import { EstadisticaService } from '../../services/estadistica.service';
import { JugadorService } from '../../services/jugador.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-partido',
  templateUrl: './partido.component.html',
  styleUrls: ['./partido.component.css']
})
export class PartidoComponent implements OnInit {
	
  jugadores: Array<any>;
  estadistica = new Estadistica(0, 0, '');
  gol: number = 0;

  constructor(private estadisticaService: EstadisticaService, private jugadorService: JugadorService) { }

  ngOnInit() {

    this.jugadorService.getAll().subscribe(data => {
      this.jugadores = data;
    });

  }

  onMenosGol(){
    this.gol -= 1;
    this.estadistica.gol = this.gol;
    this.estadisticaService.sendEstadistica(this.estadistica.gol);
  }

  onMasGol(){
    console.log(this.estadistica.gol);
    this.gol += 1;
    this.estadistica.gol = this.gol;
    this.estadisticaService.sendEstadistica(this.estadistica.gol);
  }

}
