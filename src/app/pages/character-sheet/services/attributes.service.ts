import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Attribute } from '../../../core/models/attribute';
import {first, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AttributesService {

  attributesUrl : string
  constructor(private readonly http : HttpClient) {
    this.attributesUrl = "http://localhost:8080/api/attributes"
  }

  list() {
    return this.http.get<Attribute[]>(this.attributesUrl).pipe(first())
  }

  findById(id : number) {
    return this.http.get<Attribute>(this.attributesUrl + "/" + id)
  }

  save(attribute : Partial<Attribute>) {
    if(attribute.id){
      return this.http.put(this.attributesUrl + "/" + attribute.id, attribute).pipe(first())
    }
    return this.http.post<Attribute>(this.attributesUrl, attribute).pipe(first())
  }

  delete(id : number) {
    return this.http.delete<Attribute>(this.attributesUrl + "/" + id).pipe(first())
  }

}
