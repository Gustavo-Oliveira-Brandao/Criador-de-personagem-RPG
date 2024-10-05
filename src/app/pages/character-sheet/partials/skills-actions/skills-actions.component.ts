import { Component } from '@angular/core';
import { RollButtonComponent } from '../../components/roll-button/roll-button.component';
import { CharacterService } from '../../services/character.service';
import { EditTabControlService } from '../../services/edit-tab-control.service';

@Component({
  selector: 'app-skills-actions',
  standalone: true,
  imports: [RollButtonComponent],
  templateUrl: './skills-actions.component.html',
  styleUrl: './skills-actions.component.sass'
})
export class SkillsActionsComponent {

  constructor(protected character: CharacterService, private readonly editTab: EditTabControlService) { }

  edit(index: number, tab: string) {
    this.editTab.openTab = tab
    if (tab == "skills") {
      this.editTab.skillIndex = index
    }
    if (tab == "actions") {
      this.editTab.actionIndex = index
    }
    this.editTab.open()
  }

  addAction(){
    this.editTab.openTab = "actions"
    this.editTab.open()
  }
}




