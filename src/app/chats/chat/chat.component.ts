import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {
  @ViewChild('scroll') public scroll:ElementRef= new ElementRef('scroll');
  random: number = 1;
  myid: number | null = 0;
  chatControl:FormControl = new FormControl('',Validators.required);
  messages: any = [];
  isClient: string = '';
  phone: any;
  event: boolean = false;
  constructor(
    private chatService: ChatService,
    private route: ActivatedRoute,
    private router:Router
  ) {}

  ngOnInit(): void {
    this.phone = this.route.snapshot.params.id;
    console.log(this.route.snapshot);
    this.isClient = this.route.snapshot.url[1]?.path;

    this.myid = Number(localStorage.getItem('USER_ID'));
    console.log(this.myid);

    this.router.events.subscribe(data=>{
      if(data instanceof NavigationEnd){
        this.phone = this.route.snapshot.params.id;
        // this.event = false;
        this.getMessages()
      }
    })
    if(this.phone){
      this.getMessages();
    }

  }
  sendMessage(){
    console.log(this.chatControl.value);
    let data = {
      to_id:this.phone,
      content:this.chatControl.value
    }
    this.chatService.sendMessage(data).subscribe(data=>{
      console.log(data)
      if(data){
        this.chatControl.reset();
        this.getMessages();
      }
    });

  }
  //  private scrollToBottom() {
  //   this.perfectScrollbar.directiveRef.scrollToTop(this.chatRef.nativeElement.scrollHeight);
  // }
  onPaste(event:Event){
    event.preventDefault();
    event.stopPropagation();
    console.log(this.chatControl.value);
  }
  getMessages(){
    this.chatService.getMessages(this.phone).subscribe((resp:any)=>{
      this.messages = resp.result;
      // this.scroll.nativeElement.scrollBottom;

     })
  }
}
