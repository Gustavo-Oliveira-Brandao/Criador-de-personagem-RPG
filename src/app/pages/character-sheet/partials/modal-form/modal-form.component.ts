import { Component } from '@angular/core';
import { ExpandedTabControlService } from '../../services/expanded-tab-control.service';
import { CharacterService } from '../../services/character.service';
import { AttackFormComponent } from '../../forms/attack-form/attack-form.component';
import { SkillFormComponent } from '../../forms/skill-form/skill-form.component';
import { AttrFormComponent } from '../../forms/attr-form/attr-form.component';
import { DetailsFormComponent } from '../../forms/details-form/details-form.component';

@Component({
  selector: 'app-modal-form',
  standalone: true,
  imports: [AttackFormComponent, SkillFormComponent, AttrFormComponent, DetailsFormComponent],
  templateUrl: './modal-form.component.html',
  styleUrl: './modal-form.component.sass'
})
export class ModalFormComponent {

  constructor(protected etc : ExpandedTabControlService, private readonly character : CharacterService){
    
  }
}
