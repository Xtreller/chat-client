import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { ChatComponent } from './chat/chat.component';

const routes: Routes = [
  {path:'',component:ChatComponent,canActivate:[AuthGuard]},
  {path:'/client/:id',component:ChatComponent,pathMatch:'full',canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChatsRoutingModule { }
