import { Component, Input } from '@angular/core';
import { ResourceBarComponent } from "../../components/resource-bar/resource-bar.component";
import { RpgCharacter } from '../../../../core/models/character';

@Component({
  selector: 'app-status',
  standalone: true,
  imports: [ResourceBarComponent],
  templateUrl: './status.component.html',
  styleUrl: './status.component.sass'
})
export class StatusComponent {

  @Input() character : RpgCharacter | null = null
}
