import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Skill } from '../../../core/models/skill';
import {first} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  private readonly skillsUrl: string
  constructor(private readonly http: HttpClient) {
    this.skillsUrl = "http://localhost:8080/api/skills"
  }

  list() {
    return this.http.get<Skill[]>(this.skillsUrl).pipe(first())
  }

  findById(id : number){
    return this.http.get<Skill>(this.skillsUrl + "/" + id)
  }

  save(skill : Partial<Skill>){
    if(skill.id){
      return this.http.put(this.skillsUrl + "/" + skill.id, skill).pipe(first())
    }
    return this.http.post<Skill>(this.skillsUrl, skill).pipe(first())
  }

  delete(id : number){
    return this.http.delete<Skill>(this.skillsUrl + "/" + id).pipe(first())
  }

}
