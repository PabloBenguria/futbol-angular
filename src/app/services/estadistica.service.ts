import { Injectable } from '@angular/core';

import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';

@Injectable()
export class EstadisticaService {

	//private API_URL = 'http://localhost:8888/socket'; 
	private API_URL = 'https://spring-boot-websockets.herokuapp.com/socket';
	private socket = new SockJS(this.API_URL);
	private stompClient = Stomp.over(this.socket);

  constructor() { }

  websocketConnect(){
  	return this.stompClient;
  }

  sendEstadistica(estadistica){
    this.stompClient.send("/app/send/estadistica" , {}, estadistica);
  }

}
