import { Component } from '@angular/core';
import { DetailsComponent } from "./partials/details/details.component";
import { AttributesComponent } from "./partials/attributes/attributes.component";
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { StatusComponent } from './partials/status/status.component';
import { SecondaryStatusComponent } from './partials/secondary-status/secondary-status.component';
import { SkillsAttacksComponent } from './partials/skills-attacks/skills-attacks.component';
import { ExpandedTabComponent } from "./partials/expanded-tab/expanded-tab.component";
import { EditTabControlService } from './services/edit-tab-control.service';
import { ExpandedTabControlService } from './services/expanded-tab-control.service';
import { CharacterService } from './services/character.service';

@Component({
  selector: 'app-character-sheet',
  standalone: true,
  imports: [AsyncPipe, DetailsComponent, StatusComponent, AttributesComponent, SecondaryStatusComponent, RouterOutlet, SkillsAttacksComponent, RouterLink, RouterLinkActive, ExpandedTabComponent],
  templateUrl: './character-sheet.component.html',
  styleUrl: './character-sheet.component.sass'
})
export class CharacterSheetComponent {

  constructor(protected etc : ExpandedTabControlService, protected character: CharacterService) { }
}
