import { Component } from '@angular/core';
import { DetailsComponent } from "./partials/details/details.component";
import { AttributesComponent } from "./partials/attributes/attributes.component";
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { StatusComponent } from './partials/status/status.component';
import { SecondaryStatusComponent } from './partials/secondary-status/secondary-status.component';
import { SkillsAttacksComponent } from './partials/skills-attacks/skills-attacks.component';
import { CharacterService } from './services/character.service';
import {AsyncPipe, NgOptimizedImage} from "@angular/common";
import {Observable} from "rxjs";
import {RpgCharacter} from "../../core/models/character";

@Component({
  selector: 'app-character-sheet',
  standalone: true,
  imports: [DetailsComponent, StatusComponent, AttributesComponent, SecondaryStatusComponent, RouterOutlet, SkillsAttacksComponent, RouterLink, RouterLinkActive, NgOptimizedImage, AsyncPipe],
  templateUrl: './character-sheet.component.html',
  styleUrl: './character-sheet.component.sass'
})
export class CharacterSheetComponent {

  character$ : Observable<RpgCharacter> | null = null
  constructor(protected character: CharacterService) {
    this.character$ = this.character.loadById(character.characterId)
  }

}




