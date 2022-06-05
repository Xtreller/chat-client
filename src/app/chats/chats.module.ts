import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatsRoutingModule } from './chats-routing.module';
import { ChatComponent } from './chat/chat.component';
import { ContactsComponent } from './contacts/contacts.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ChatComponent,
    ContactsComponent,
  ],
  imports: [
    CommonModule,
    ChatsRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
  ]
})
export class ChatsModule { }
