import { Component, Input } from '@angular/core';
import { Talent } from '../../../../core/models/talent';

@Component({
  selector: 'app-talent',
  standalone: true,
  imports: [],
  templateUrl: './talent.component.html',
  styleUrl: './talent.component.sass'
})
export class TalentComponent {

  @Input() talent : Talent | null = null

  isExpanded : boolean = false

  expand(){
    this.isExpanded = !this.isExpanded
  }
}
