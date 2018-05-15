import { Component, OnInit } from '@angular/core';

import { Estadistica } from '../../models/estadistica';
import { EstadisticaService } from '../../services/estadistica.service';

@Component({
  selector: 'app-estadistica',
  templateUrl: './estadistica.component.html',
  styleUrls: ['./estadistica.component.css']
})
export class EstadisticaComponent implements OnInit {

	estadistica = new Estadistica(0, 0, '');
  gol: number = 0;

  constructor(private estadisticaService: EstadisticaService) { }

  ngOnInit() {
    let stompClient = this.estadisticaService.websocketConnect();
    
    stompClient.connect({}, frame => {
      stompClient.subscribe('/estadistica', estadistica => {
        this.gol = JSON.parse(estadistica.body);
      })
    });
  }

}
