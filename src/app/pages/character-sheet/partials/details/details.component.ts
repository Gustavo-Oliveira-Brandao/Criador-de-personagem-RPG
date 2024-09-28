import { Component } from '@angular/core';
import { DetailButtonComponent } from "../../components/detail-button/detail-button.component";
import { CharacterService } from '../../services/character.service';
import { EditTabControlService } from '../../services/edit-tab-control.service';


@Component({
  selector: 'app-details',
  standalone: true,
  imports: [DetailButtonComponent],
  templateUrl: './details.component.html',
  styleUrl: './details.component.sass'
})
export class DetailsComponent {

  constructor(protected character:CharacterService, protected editTab: EditTabControlService) {
    
  }

  edit(){
    this.editTab.openTab = "details"
    this.editTab.open()
  }
}
