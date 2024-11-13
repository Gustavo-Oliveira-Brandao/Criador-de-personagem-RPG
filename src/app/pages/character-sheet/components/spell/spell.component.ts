import { Component, Input } from '@angular/core';
import { Spell } from '../../../../core/models/spell';

@Component({
  selector: 'app-spell',
  standalone: true,
  imports: [],
  templateUrl: './spell.component.html',
  styleUrl: './spell.component.sass'
})
export class SpellComponent {

  isExpanded : boolean = false

  expand(){
    this.isExpanded = !this.isExpanded
  }

  @Input() spell : Spell | null = null
}
