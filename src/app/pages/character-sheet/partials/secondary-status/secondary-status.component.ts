import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RollButtonComponent } from "../../components/roll-button/roll-button.component";
import { AttributeComponent } from '../../components/attribute/attribute.component';

import { CharacterService } from '../../services/character.service';
import { EditTabControlService } from '../../services/edit-tab-control.service';

@Component({
  selector: 'app-secondary-status',
  standalone: true,
  imports: [FormsModule, RollButtonComponent, AttributeComponent],
  templateUrl: './secondary-status.component.html',
  styleUrl: './secondary-status.component.sass'
})
export class SecondaryStatusComponent {

  constructor(protected character : CharacterService, private editTab: EditTabControlService){}

  
  edit(index: number){
    this.editTab.openTab="skills"
    this.editTab.skillIndex = index
    this.editTab.open()
  }
}
