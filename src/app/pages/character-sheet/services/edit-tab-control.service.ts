import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EditTabControlService {

  constructor() { }

  isTabOpened = false

  item : any
}
