import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AuthGuard } from './auth.guard';
import { ChatComponent } from './chats/chat/chat.component';
import { DummyComponent } from './dummy/dummy.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { AdminPanelComponent } from './user/admin-panel/admin-panel.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {path:'',component:WelcomeComponent},
  {path:'chats',loadChildren: () => import('./chats/chats.module').then(m => m.ChatsModule)},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'admin_panel',component:AdminPanelComponent,canActivate:[AuthGuard]},
  {path:'about',component:AboutComponent},
  {path:'openSms',component:DummyComponent},
  {path:'**',component:NotFoundPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
