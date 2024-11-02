import { Component } from '@angular/core';
import { DetailsComponent } from "./partials/details/details.component";
import { AttributesComponent } from "./partials/attributes/attributes.component";
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CharacterService } from './services/character.service';
import {AsyncPipe, NgIf, NgOptimizedImage} from "@angular/common";
import {Observable} from "rxjs";
import {RpgCharacter} from "../../core/models/character";
import { ModularCardComponent } from "./components/modular-card/modular-card.component";
import { SavingThrowsComponent } from "./partials/saving-throws/saving-throws.component";
import { ConditionsComponent } from "./partials/conditions/conditions.component";
@Component({
  selector: 'app-character-sheet',
  standalone: true,
  imports: [NgIf, DetailsComponent, AttributesComponent, RouterOutlet, RouterLink, RouterLinkActive, NgOptimizedImage, AsyncPipe, ModularCardComponent, SavingThrowsComponent, ConditionsComponent],
  templateUrl: './character-sheet.component.html',
  styleUrl: './character-sheet.component.sass'
})
export class CharacterSheetComponent {

  constructor(protected character: CharacterService) {
    this.character$ = this.character.loadById(character.characterId)
  }

  tab : string = "skills"

  changeTab(tab : string){
    this.tab = tab
  }

  character$ !: Observable<RpgCharacter>
}




