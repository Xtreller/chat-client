import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './user/register/register.component';
import { LoginComponent } from './user/login/login.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field'
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { ChatComponent } from './chats/chat/chat.component';
import { ContactsComponent } from './chats/contacts/contacts.component';
import { ChatsModule } from './chats/chats.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { PerfectScrollbarConfigInterface, PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarEvents } from 'ngx-perfect-scrollbar/lib/perfect-scrollbar.interfaces';
import { HeaderComponent } from './header/header.component';
import { HttpInterceptorService } from './http-interceptor.service';
import { AdminPanelComponent } from './user/admin-panel/admin-panel.component';
import { AgGridModule } from 'ag-grid-angular';
import { AdminTableActionsComponent } from './user/admin-panel/admin-table-actions/admin-table-actions.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { AboutComponent } from './about/about.component';
import { DummyComponent } from './dummy/dummy.component';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    WelcomeComponent,
    HeaderComponent,
    AdminPanelComponent,
    AdminTableActionsComponent,
    NotFoundPageComponent,
    AboutComponent,
    DummyComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MaterialModule,
    HttpClientModule,
    AgGridModule
],
providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue:DEFAULT_PERFECT_SCROLLBAR_CONFIG
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
