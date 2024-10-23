import { Component } from '@angular/core';
import { DetailsComponent } from "./partials/details/details.component";
import { AttributesComponent } from "./partials/attributes/attributes.component";
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { StatusComponent } from './partials/status/status.component';
import { SecondaryStatusComponent } from './partials/secondary-status/secondary-status.component';
import { SkillsAttacksComponent } from './partials/skills-attacks/skills-attacks.component';
import { CharacterService } from './services/character.service';

@Component({
  selector: 'app-character-sheet',
  standalone: true,
  imports: [DetailsComponent, StatusComponent, AttributesComponent, SecondaryStatusComponent, RouterOutlet, SkillsAttacksComponent, RouterLink, RouterLinkActive],
  templateUrl: './character-sheet.component.html',
  styleUrl: './character-sheet.component.sass'
})
export class CharacterSheetComponent {

  constructor(protected character: CharacterService) { }

}




