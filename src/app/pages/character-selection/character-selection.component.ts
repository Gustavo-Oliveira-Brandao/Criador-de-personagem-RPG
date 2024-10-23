import { Component } from '@angular/core';
import { CharacterService } from '../character-sheet/services/character.service';
import { AsyncPipe } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

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

  selectCharacter(index: number) {
    this.character.loadByIndex(index)
  }
}

