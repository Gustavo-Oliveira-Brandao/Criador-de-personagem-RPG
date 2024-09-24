import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-roll-button',
  standalone: true,
  imports: [],
  templateUrl: './roll-button.component.html',
  styleUrl: './roll-button.component.sass'
})
export class RollButtonComponent {

  @Input() valor:number = 0
  
}
