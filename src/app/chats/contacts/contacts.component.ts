import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  random: any[] = [];
  contacts: any;
  phone: any;

  constructor(private chatService:ChatService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.phone = this.route.snapshot.params.id
    this.router.events.subscribe(data=>{
      this.phone = this.route.snapshot.params.id
    })
    this.chatService.getContacts().subscribe((data:any)=>{
      console.log(data);
      this.contacts = data.result;
    })
  }

}
