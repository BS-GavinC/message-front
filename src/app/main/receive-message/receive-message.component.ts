import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService, message } from 'src/app/services/message.service';

@Component({
  selector: 'app-receive-message',
  templateUrl: './receive-message.component.html',
  styleUrls: ['./receive-message.component.scss']
})
export class ReceiveMessageComponent {

  messageData! : message

  constructor(private _messageService : MessageService, private _router : Router) {

    if (_messageService.receiveMessage === undefined) {
      _router.navigate(['../'])
    }

    this.messageData = _messageService.receiveMessage

  }

}
