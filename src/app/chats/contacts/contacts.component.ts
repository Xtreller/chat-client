import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  random: any[] = [];
  contacts: any;

  constructor(private chatService:ChatService) { }

  ngOnInit(): void {
    this.chatService.getContacts().subscribe((data:any)=>{
      console.log(data);
      this.contacts = data.results;
    })
  }

}
