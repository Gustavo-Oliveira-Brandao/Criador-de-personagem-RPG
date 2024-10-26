import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {first, Observable} from "rxjs";
import {Spell} from "../../../core/models/spell";

@Injectable({
  providedIn: 'root'
})
export class SpellsService {

  private readonly spellsUrl : string
  constructor(private readonly http: HttpClient) {
    this.spellsUrl = 'http://localhost:8080/api/spells';
  }

  list() {
    return this.http.get<Spell[]>(this.spellsUrl).pipe(first())
  }

  findById(id : number) : Observable<Spell> {
    return this.http.get<Spell>(this.spellsUrl + "/" + id)
  }

  save(spell : Partial<Spell>)  {
    if(spell.id) {
      return this.http.put(this.spellsUrl + "/" + spell.id, spell).pipe(first())
    }
    return this.http.post(this.spellsUrl, spell).pipe(first())
  }

  delete(id : number) {
    return this.http.delete(this.spellsUrl + "/" + id).pipe(first())
  }

}
