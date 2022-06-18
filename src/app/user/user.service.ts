import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  environment = environment;
  url:string = environment.apiUrl + 'auth/';
  constructor(private httpClient:HttpClient) { }
  register(data:any){
    return this.httpClient.post(this.url+ 'register',data)
  }
  login(data:any){
    return this.httpClient.post(this.url+ 'login',data)
  }
  logout(){
    return this.httpClient.get(this.url+ 'logout')

  }
}
