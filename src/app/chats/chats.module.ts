import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatsRoutingModule } from './chats-routing.module';
import { ChatComponent } from './chat/chat.component';
import { ContactsComponent } from './contacts/contacts.component';


@NgModule({
  declarations: [
    ChatComponent,
    ContactsComponent,
  ],
  imports: [
    CommonModule,
    ChatsRoutingModule
  ]
})
export class ChatsModule { }
