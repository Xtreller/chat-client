import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {
  random: number = 1;
  myid: number | null = 0;
  chatControl:FormControl = new FormControl('',Validators.required);
  messages: any = [
    {
      user_type: 1,
      content: 'Здравейте! Аз съм тайра за да продължите да си чатите с мен трябва да ви информирам че цената на всяко съобщение е 6лв. Ако желаете да продължим отговорете с да.',
      from_user: {id:3,name:'Тайра',user_type:1},
      created_at: '2021-12-22',
      seen: 'true',
    },
    {
      user_type: 1,
      content: 'ЧКС',
      from_user:{id:1,name:'0879123499',user_type:2},
      created_at: '2021-12-22',
      seen: 'false',
    },
    {
      user_type: 1,
      content: 'text3',
      from_user: {id:1,name:'0879123499',user_type:2},
      created_at: '2021-12-22',
      seen: 'false',
    },
  ];
  isClient: string = '';
  constructor(
    private chatService: ChatService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    console.log('chat-test');
    let client = this.route.snapshot.params.id;
    this.isClient = this.route.snapshot.url[1].path;

    this.myid = Number(localStorage.getItem('USER_ID'));
    if (this.isClient == 'client') {
      console.log(this.isClient, client);
      console.log();
    }
  }
  sendMessage(){
    console.log(this.chatControl.value);

  }
  onPaste(event:Event){
    event.preventDefault();
    event.stopPropagation();
    console.log(this.chatControl.value);
  }
}
