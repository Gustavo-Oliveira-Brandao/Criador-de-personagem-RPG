import { Component, Input } from '@angular/core';
import { RollButtonComponent } from "../roll-button/roll-button.component";
import { IAttribute } from '../../../../core/models/i-attribute';
import { EditTabControlService } from '../../services/edit-tab-control.service';

@Component({
  selector: 'app-attribute',
  standalone: true,
  imports: [RollButtonComponent],
  templateUrl: './attribute.component.html',
  styleUrl: './attribute.component.sass'
})
export class AttributeComponent {

  @Input() attribute !: IAttribute
  @Input() index !: number
  @Input() type = ""

  constructor(private editTab: EditTabControlService) { }

  edit(index: number, type: string) {
    if (type == "attribute") {
      this.editTab.openTab = "attribute"
      this.editTab.attributeIndex = index
    }
    if (type == "savingThrows") {
      this.editTab.openTab = "savingThrows"
      this.editTab.saveIndex = index
    }
    this.editTab.open()
  }
}
