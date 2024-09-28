import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EditTabControlService {

  constructor() {
  }

  attributeIndex : number = 0
  skillIndex : number = 0
  saveIndex = 0
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
