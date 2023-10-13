import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewMessageComponent } from './main/new-message/new-message.component';
import { ReceiveMessageComponent } from './main/receive-message/receive-message.component';

const routes: Routes = [
  {path : "", component : NewMessageComponent},
  {path : "message", component : ReceiveMessageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
