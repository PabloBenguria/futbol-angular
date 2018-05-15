import { Component, OnInit } from '@angular/core';

import {ActivatedRoute} from "@angular/router";

import { JugadorService } from '../../services/jugador.service';
import { Jugador } from '../../models/jugador';

@Component({
  selector: 'app-jugador',
  templateUrl: './jugador-detail.component.html',
  styleUrls: ['./jugador-detail.component.css']
})
export class JugadorDetailComponent implements OnInit {

	jugador: Jugador;

  constructor(
  	private route: ActivatedRoute,
  	private jugadorService: JugadorService
  	) {
    	this.route.params.subscribe( params => console.log(params) );
	}

  ngOnInit() {
  	this.jugadorService.getAll().subscribe(data => {
      this.jugador = data[0];
    });
  }

}
