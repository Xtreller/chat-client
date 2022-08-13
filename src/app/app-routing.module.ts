import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { ChatComponent } from './chats/chat/chat.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { AdminPanelComponent } from './user/admin-panel/admin-panel.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {path:'',component:WelcomeComponent},
  {path:'chats',component:ChatComponent,canActivate:[AuthGuard]},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'admin_panel',component:AdminPanelComponent,canActivate:[AuthGuard]},
  {path:'**',component:NotFoundPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
