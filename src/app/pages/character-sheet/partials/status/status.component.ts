import { Component, Input } from '@angular/core';
import { ResourceBarComponent } from "../../components/resource-bar/resource-bar.component";
import { RpgCharacter } from '../../../../core/models/character';
import { ModularCardComponent } from "../../components/modular-card/modular-card.component";

@Component({
  selector: 'app-status',
  standalone: true,
  imports: [ResourceBarComponent, ModularCardComponent],
  templateUrl: './status.component.html',
  styleUrl: './status.component.sass'
})
export class StatusComponent {

  @Input() title: string = ""
  @Input() current : number = 0
  @Input() max : number = 0
  @Input () css : string = ""
  @Input() icon : string = ""
}
