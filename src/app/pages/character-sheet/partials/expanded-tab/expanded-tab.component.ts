import { Component } from '@angular/core';
import { ExpandedTabControlService } from '../../services/expanded-tab-control.service';
import { CharacterService } from '../../services/character.service';
import { SkillFormComponent } from '../../forms/skill-form/skill-form.component';
import { AttrFormComponent } from '../../forms/attr-form/attr-form.component';
import { DetailsFormComponent } from "../../forms/details-form/details-form.component";
import { AttackFormComponent } from "../../forms/attack-form/attack-form.component";

@Component({
  selector: 'app-expanded-tab',
  standalone: true,
  imports: [SkillFormComponent, AttrFormComponent, DetailsFormComponent, AttackFormComponent],
  templateUrl: './expanded-tab.component.html',
  styleUrl: './expanded-tab.component.sass'
})
export class ExpandedTabComponent {

  constructor(protected etc : ExpandedTabControlService, private character : CharacterService){
    
  }
  



}
