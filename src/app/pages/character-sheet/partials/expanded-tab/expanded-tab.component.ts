import { Component } from '@angular/core';
import { ExpandedTabControlService } from '../../services/expanded-tab-control.service';
import { DynamicFormComponent } from "../../../../shared/components/dynamic-form/dynamic-form.component";
import { CharacterService } from '../../services/character.service';

@Component({
  selector: 'app-expanded-tab',
  standalone: true,
  imports: [DynamicFormComponent],
  templateUrl: './expanded-tab.component.html',
  styleUrl: './expanded-tab.component.sass'
})
export class ExpandedTabComponent {

  constructor(protected etc : ExpandedTabControlService, private character : CharacterService){
    
  }
  



}
