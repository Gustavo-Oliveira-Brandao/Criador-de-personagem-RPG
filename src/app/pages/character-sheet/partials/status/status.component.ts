import {Component, Input} from '@angular/core';
import { ResourceBarComponent } from "../../components/resource-bar/resource-bar.component";
import { FormsModule } from "@angular/forms"
import { CharacterService } from '../../services/character.service';
import {RpgCharacter} from "../../../../core/models/character";


@Component({
  selector: 'app-status',
  standalone: true,
  imports: [ResourceBarComponent, FormsModule],
  templateUrl: './status.component.html',
  styleUrl: './status.component.sass'
})
export class StatusComponent {

  constructor(){
    console.log(this.character?.skills)
  }

  @Input() character: RpgCharacter | null = null
}
