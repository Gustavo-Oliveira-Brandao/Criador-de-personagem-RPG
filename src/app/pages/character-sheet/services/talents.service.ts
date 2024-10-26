import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {first, Observable} from "rxjs";
import {Talent} from "../../../core/models/talent";

@Injectable({
  providedIn: 'root'
})
export class TalentsService {

  private readonly talentsUrl : string
  constructor(private readonly http : HttpClient) {
    this.talentsUrl = "http://localhost:8080/api/talents"
  }

  list()  {
    return this.http.get<Talent[]>(this.talentsUrl).pipe(first())
  }

  findById(id : number) {
    return this.http.get<Talent>(`${this.talentsUrl}/${id}`)
  }

  save(talent : Partial<Talent>) {
    if(talent.id){
      return this.http.put(this.talentsUrl + "/" + talent.id, talent).pipe(first())
    }
    return this.http.post(this.talentsUrl, talent).pipe(first())
  }

  delete(id : number){
    return this.http.delete(this.talentsUrl + "/" + id).pipe(first())
  }
}
