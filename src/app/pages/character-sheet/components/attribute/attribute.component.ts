import { Component, Input } from '@angular/core';
import { RollButtonComponent } from "../roll-button/roll-button.component";
import { IAttribute } from '../../../../core/models/i-attribute';
import { ExpandedTabControlService } from '../../services/expanded-tab-control.service';
import { ISkill } from '../../../../core/models/i-skill';

@Component({
  selector: 'app-attribute',
  standalone: true,
  imports: [RollButtonComponent],
  templateUrl: './attribute.component.html',
  styleUrl: './attribute.component.sass'
})
export class AttributeComponent {

  constructor(private readonly etc: ExpandedTabControlService) { }

  @Input() attribute?: IAttribute
  @Input() save?: ISkill
  @Input() index !: number
  @Input() type = ""

  edit() {
    if (this.attribute) {
      this.etc.choosenAttr = this.attribute
    }
    if (this.save) {
      this.etc.choosenSkill = this.save
    }
    this.etc.index = this.index
    this.etc.tab = this.type
    this.etc.open()
  }
}
