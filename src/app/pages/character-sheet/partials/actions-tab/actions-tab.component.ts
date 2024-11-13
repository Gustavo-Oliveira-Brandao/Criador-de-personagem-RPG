import { Component, Input } from '@angular/core';
import { AttackComponent } from "../../components/attack/attack.component";
import { Attack } from '../../../../core/models/attack';

@Component({
  selector: 'app-actions-tab',
  standalone: true,
  imports: [AttackComponent],
  templateUrl: './actions-tab.component.html',
  styleUrl: './actions-tab.component.sass'
})
export class ActionsTabComponent {

  @Input() actions : Attack[] | null = null
}
