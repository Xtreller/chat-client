import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  random: number = 1;

  constructor(private chatService:ChatService) { }

  ngOnInit(): void {
    console.log('chat-test');

  }

}
