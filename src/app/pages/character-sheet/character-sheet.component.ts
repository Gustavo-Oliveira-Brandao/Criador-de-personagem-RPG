import { Component } from '@angular/core';
import { DetailsComponent } from "./partials/details/details.component";
import { StatusComponent } from "./partials/status/status.component";
import { AttributesComponent } from "./partials/attributes/attributes.component";
import { SecondaryStatusComponent } from "./partials/secondary-status/secondary-status.component";
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { SkillsActionsComponent } from "./partials/skills-actions/skills-actions.component";

@Component({
  selector: 'app-character-sheet',
  standalone: true,
  imports: [DetailsComponent, StatusComponent, AttributesComponent, SecondaryStatusComponent, RouterOutlet, SkillsActionsComponent, RouterLink, RouterLinkActive],
  templateUrl: './character-sheet.component.html',
  styleUrl: './character-sheet.component.sass'
})
export class CharacterSheetComponent {

}
