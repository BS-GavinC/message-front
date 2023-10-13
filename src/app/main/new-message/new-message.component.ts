import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-new-message',
  templateUrl: './new-message.component.html',
  styleUrls: ['./new-message.component.scss']
})
export class NewMessageComponent {

  constructor(private _messageService : MessageService, private _router : Router) {


  }

  message! : string

  addMessage = () => {
    this._messageService.sendMessage(this.message).subscribe({
      next : (data) => {
        this._messageService.receiveMessage = data
        this._router.navigate(['/message'])
      }
    })
  }

}
