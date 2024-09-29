import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RollService {

  constructor() { }

  playSound(){
    let rollSound = new Audio()
    console.log("tocou?")
    rollSound.src = "/dice-roll.mp3"
    
  }
}
