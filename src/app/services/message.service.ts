import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  receiveMessage! : message

  constructor(private _http : HttpClient) { }

  sendMessage = (message : string) => {
    return this._http.get<message>("http://localhost:3000/" + message)
  }




}


export interface message{
  message : string,
  add_date : Date
}
