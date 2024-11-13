import { Injectable } from '@angular/core';
import { RpgCharacter } from '../../../core/models/character';
import { HttpClient } from '@angular/common/http';
import { first, Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  charactersUrl: string
  constructor(private readonly http: HttpClient) {
    this.charactersUrl = "http://localhost:8080/api/characters"
  }

  characterId: number = 1

  edition = "t20"

  list() {
    return this.http.get<RpgCharacter[]>(this.charactersUrl).pipe(first())
  }

  loadById(id: number) {
    return this.http.get<RpgCharacter>(this.charactersUrl + "/" + id)
  }

  saveCharacter(character: Partial<RpgCharacter>) {
    if (character.id) {
      return this.http.put(this.charactersUrl + "/" + character.id, character).pipe(first())
    }
    return this.http.post<RpgCharacter>(this.charactersUrl, character).pipe(first())
  }

  deleteCharacter(id: number) {
    return this.http.delete<RpgCharacter>(this.charactersUrl + "/" + id).pipe(first())
  }


}
