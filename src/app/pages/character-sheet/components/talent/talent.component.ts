import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-talent',
  standalone: true,
  imports: [],
  templateUrl: './talent.component.html',
  styleUrl: './talent.component.sass'
})
export class TalentComponent {

  @Input() talent : any
  
  isOpened = false

  open(){
    this.isOpened = !this.isOpened
  }
}
