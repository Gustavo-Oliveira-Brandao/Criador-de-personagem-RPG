import { Component } from '@angular/core';
import { CharacterService } from '../character-sheet/services/character.service';
import { AsyncPipe } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { RpgCharacter } from '../../core/models/i-character';

@Component({
  selector: 'app-character-selection',
  standalone: true,
  imports: [AsyncPipe, RouterLink, RouterLinkActive],
  templateUrl: './character-selection.component.html',
  styleUrl: './character-selection.component.sass'
})
export class CharacterSelectionComponent {

  constructor(protected character: CharacterService) {
    this.refresh()
  }

  refresh() {
    this.character.list()
  }

  selectCharacter(character: RpgCharacter) {
    if (character) {
      this.character.loadSelectedCharacter(character)
    }
  }

}
