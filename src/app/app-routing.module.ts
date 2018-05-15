import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EstadisticaComponent } from './components/estadistica/estadistica.component';
import { PartidoComponent } from './components/partido/partido.component';
import { HistoricoComponent } from './components/historico/historico.component';
import { JugadorDetailComponent } from './components/jugador-detail/jugador-detail.component';
import { JugadorListComponent } from './components/jugador-list/jugador-list.component';
import { JugadorCreateComponent } from './components/jugador-create/jugador-create.component';
 
const routes: Routes = [
  { path: '', redirectTo: '/jugadores', pathMatch: 'full' },
  { path: 'estadisticas', component: EstadisticaComponent },
  { path: 'partidos', component: PartidoComponent },
  { path: 'historico', component: HistoricoComponent },
  { path: 'jugadores', component: JugadorListComponent },
  //{ path: 'jugador/:id', component: JugadorDetailComponent }
  { path: 'jugador/1', component: JugadorDetailComponent },
  { path: 'jugador-crear', component: JugadorCreateComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}