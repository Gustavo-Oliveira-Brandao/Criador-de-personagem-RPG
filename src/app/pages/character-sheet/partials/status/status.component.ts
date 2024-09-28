import { Component } from '@angular/core';
import { ResourceBarComponent } from "../../components/resource-bar/resource-bar.component";
import { FormsModule } from "@angular/forms"
import { EditTabControlService } from '../../services/edit-tab-control.service';
import { CharacterService } from '../../services/character.service';

@Component({
  selector: 'app-status',
  standalone: true,
  imports: [ResourceBarComponent, FormsModule],
  templateUrl: './status.component.html',
  styleUrl: './status.component.sass'
})
export class StatusComponent {

  constructor(private editTab: EditTabControlService, protected character : CharacterService){}
  editPv(){
    this.editTab.openTab = "pv"
    this.editTab.open()
  }

  editMp(){
    this.editTab.openTab = "mp"
    this.editTab.open()
  }
}
