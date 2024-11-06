import { Component } from '@angular/core';
import { AttackComponent } from "../../components/attack/attack.component";

@Component({
  selector: 'app-actions-tab',
  standalone: true,
  imports: [AttackComponent],
  templateUrl: './actions-tab.component.html',
  styleUrl: './actions-tab.component.sass'
})
export class ActionsTabComponent {

}
