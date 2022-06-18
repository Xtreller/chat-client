import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { ChatService } from '../chats/chat.service';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  showContacts: any;
  isAuth: any;
  contacts: any;
  user: any;

  constructor(private router:Router,
    private location: Location,
    private userService:UserService,private chatService:ChatService) { }

  ngOnInit(): void {
    this.isAuth = localStorage.getItem('TOKEN');
    this.user = localStorage.getItem("USER_EMAIL");
    this.router.events.subscribe(data=>{
      if(data instanceof NavigationEnd){
        this.showContacts = this.location.path().includes('chat');
        if(this.showContacts){
          this.chatService.getContacts().subscribe((resp:any)=>{
            console.log(resp)
            this.contacts = resp.result;
          })
        }
      }
    })

  }
  redirect(phone:number){
    console.log(phone);
    this.router.navigate(['/chat/client/',phone]);
  }
  logout(){

    this.userService.logout().subscribe((response:any)=>
    {
      if(response == 'success.'){
        this.isAuth = false;
        this.user = null;
        this.router.navigate(['/'])
      }

    })
  }

}
