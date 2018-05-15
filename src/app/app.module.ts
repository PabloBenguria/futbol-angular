import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { JugadorDetailComponent } from './components/jugador-detail/jugador-detail.component';
import { EstadisticaComponent } from './components/estadistica/estadistica.component';
import { EstadisticaService } from './services/estadistica.service';
import { JugadorService } from './services/jugador.service';
import { PartidoComponent } from './components/partido/partido.component';
import { MenuComponent } from './components/menu/menu.component';
import { HistoricoComponent } from './components/historico/historico.component';
import { JugadorListComponent } from './components/jugador-list/jugador-list.component';
import { JugadorCreateComponent } from './components/jugador-create/jugador-create.component';


@NgModule({
  declarations: [
    AppComponent,
    JugadorDetailComponent,
    EstadisticaComponent,
    PartidoComponent,
    MenuComponent,
    HistoricoComponent,
    JugadorListComponent,
    JugadorCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    EstadisticaService,
    JugadorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
