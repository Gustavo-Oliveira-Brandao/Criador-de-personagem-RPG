import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Attack} from "../../../core/models/attack";
import {first, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AttacksService {

  private readonly attacksUrl: string
  constructor(private readonly http : HttpClient) {
    this.attacksUrl = "http://localhost:8080/api/attacks"
  }

  list() {
    return this.http.get<Attack[]>(this.attacksUrl).pipe(first())
  }

  findById(id : number){
    return this.http.get<Attack>(this.attacksUrl + "/" + id)
  }

  save(attack : Partial<Attack>)  {
    if(attack.id){
      return this.http.post<Attack>(this.attacksUrl + "/" + attack.id, attack).pipe(first())
    }
    return this.http.post<Attack>(this.attacksUrl, attack).pipe(first())
  }

  delete(id: number) {
    return this.http.delete(this.attacksUrl + "/" + id).pipe(first())
  }

}
