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
    return this.httpClient.get(this.swapi + 'people')
  }
}
