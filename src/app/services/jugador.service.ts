import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

import { ApiRoutes } from '../api-routes/api-routes';
import { Jugador } from '../models/jugador';

@Injectable()
export class JugadorService {

  jugador: Jugador;
  jugadores:Jugador[] = [];
  
  constructor(private httpService: HttpClient, private router: Router) { }

  getAll(): Observable<any> {
    return this.httpService.get(ApiRoutes.JUGADORES_URL);
  }

  saveJugador(jugador) {
    this.httpService.post(ApiRoutes.JUGADORES_URL, jugador)
      .subscribe(res => {
          this.router.navigate(['/jugadores']);
        }, (err) => {
          console.log(err);
        }
      );
  }

}
