import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private environment = environment;
  private url:string = environment.apiUrl ;
  constructor(private httpClient:HttpClient) { }
  register(data:any){
    return this.httpClient.post(this.url+ 'auth/' +'register',data)
  }
  login(data:any){
    return this.httpClient.post(this.url+'auth/' + 'login',data)
  }
  logout(){
    return this.httpClient.get(this.url+ 'auth/' +'logout')
  }
  getUsers(){
    return this.httpClient.get(this.url + 'getUsers');
  }
  getClients(){
    return this.httpClient.get(this.url + 'getClients?token='+localStorage.getItem('TOKEN'))
  }
  getRole(id:any){
    return this.httpClient.get(this.url + 'getRole/'+id+'?token='+localStorage.getItem('TOKEN'))
  }
}
