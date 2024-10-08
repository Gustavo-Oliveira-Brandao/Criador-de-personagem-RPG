import { Injectable } from '@angular/core';
import { IAttack } from '../../../core/models/i-attack';
import { ISpell } from '../../../core/models/i-spell';
import { ISkill } from '../../../core/models/i-skill';
import { IAttribute } from '../../../core/models/i-attribute';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ExpandedTabControlService {

  constructor() { }

  tab: string = ""
  title: string = ""
  category: string = ""
  action: string = ""
  choosenAttack !: IAttack
  choosenSpell !: ISpell
  choosenSkill !: ISkill
  choosenAttr !: IAttribute

  choosenFormData: any
  choosenForm !: FormGroup

  payload = ""

  onSubmit = () => {
    this.payload = JSON.stringify(this.choosenForm.getRawValue())
  }
}
