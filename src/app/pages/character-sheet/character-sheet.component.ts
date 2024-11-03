import { Component, OnDestroy } from '@angular/core';
import { DetailsComponent } from "./partials/details/details.component";
import { AttributesComponent } from "./partials/attributes/attributes.component";
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CharacterService } from './services/character.service';
import {AsyncPipe, NgIf, NgOptimizedImage} from "@angular/common";
import {Observable, Subscription} from "rxjs";
import {RpgCharacter} from "../../core/models/character";
import { ModularCardComponent } from "./components/modular-card/modular-card.component";
import { SavingThrowsComponent } from "./partials/saving-throws/saving-throws.component";
import { ConditionsComponent } from "./partials/conditions/conditions.component";
import { StatusComponent } from "./partials/status/status.component";
@Component({
  selector: 'app-character-sheet',
  standalone: true,
  imports: [NgIf, DetailsComponent, AttributesComponent, RouterOutlet, RouterLink, RouterLinkActive, NgOptimizedImage, AsyncPipe, ModularCardComponent, SavingThrowsComponent, ConditionsComponent, StatusComponent],
  templateUrl: './character-sheet.component.html',
  styleUrl: './character-sheet.component.sass'
})
export class CharacterSheetComponent implements OnDestroy {

  constructor(protected characterService: CharacterService) {
    this.subscription = this.characterService.loadById(characterService.characterId).subscribe(data => this.character = data)
  }

  subscription : Subscription

  tab : string = "skills"

  changeTab(tab : string){
    this.tab = tab
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

  character !: RpgCharacter
}




