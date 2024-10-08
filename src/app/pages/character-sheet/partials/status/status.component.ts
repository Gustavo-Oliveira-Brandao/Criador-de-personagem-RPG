import { Component } from '@angular/core';
import { ResourceBarComponent } from "../../components/resource-bar/resource-bar.component";
import { FormsModule } from "@angular/forms"
import { CharacterService } from '../../services/character.service';
import { ExpandedTabControlService } from '../../services/expanded-tab-control.service';


@Component({
  selector: 'app-status',
  standalone: true,
  imports: [ResourceBarComponent, FormsModule],
  templateUrl: './status.component.html',
  styleUrl: './status.component.sass'
})
export class StatusComponent {

  constructor(protected character:CharacterService, protected etc : ExpandedTabControlService){
  }

}
