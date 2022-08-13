import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  environment = environment;
  url = environment.apiUrl;
  swapi = "https://swapi.dev/api/"
  constructor(private httpClient:HttpClient) {

  }
  getContacts(){
    localStorage.getItem('USER_ID');
    return this.httpClient.get(this.url + 'getClients'+'?token='+ localStorage.getItem('TOKEN'))
  }
  getMessages(phone:number){
    return this.httpClient.get(this.url + 'getMessages'+'/'+phone+'?token='+ localStorage.getItem('TOKEN'))
  }
  sendMessage(data:any){
    return this.httpClient.post(this.url + 'sendMessage?token='+ localStorage.getItem('TOKEN'),data);
  }
  getWelcomeScreen(){
    return this.httpClient.get(this.url + 'getLandingData?token='+ localStorage.getItem('TOKEN'));
  }
}
