import {Component, OnInit} from '@angular/core';
import { CharacterService } from '../character-sheet/services/character.service';
import { AsyncPipe } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import {first, Observable} from 'rxjs';
import { RpgCharacter } from '../../core/models/character';

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

  characters$: Observable<RpgCharacter[]> | null = null

  refresh() {
    this.characters$ = this.character.list()
  }

  loadById(id: number) {
    this.character.character$ = this.character.loadById(id)
  }

}

