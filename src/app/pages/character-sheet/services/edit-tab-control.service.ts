import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EditTabControlService {

  constructor() {
  }

  attributeIndex = 0
  skillIndex = 0
  saveIndex = 0
  actionIndex = 0
  openTab : string = ""
  item : any

  isOpened = false

  open(){
    this.isOpened = false
    setTimeout(() => {
      this.isOpened = true
    }, 1);
  }

}
