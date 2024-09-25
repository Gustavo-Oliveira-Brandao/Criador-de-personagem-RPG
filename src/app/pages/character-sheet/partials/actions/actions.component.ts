import { Component } from '@angular/core';
import { RollButtonComponent } from "../../components/roll-button/roll-button.component";

@Component({
  selector: 'app-actions',
  standalone: true,
  imports: [RollButtonComponent],
  templateUrl: './actions.component.html',
  styleUrl: './actions.component.sass'
})
export class ActionsComponent {

}
