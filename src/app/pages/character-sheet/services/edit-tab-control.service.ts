import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EditTabControlService {

  constructor() { }

  openTab : string = ""
  item : any
}
