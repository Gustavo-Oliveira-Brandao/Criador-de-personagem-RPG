import { Component } from '@angular/core';
import { DetailButtonComponent } from "../../components/detail-button/detail-button.component";
import { CharacterService } from '../../services/character.service';
import { ExpandedTabControlService } from '../../services/expanded-tab-control.service';


@Component({
  selector: 'app-details',
  standalone: true,
  imports: [DetailButtonComponent],
  templateUrl: './details.component.html',
  styleUrl: './details.component.sass'
})
export class DetailsComponent {

  constructor(private readonly etc :ExpandedTabControlService, protected character:CharacterService){}

  edit(){
    this.etc.tab = "details"
    this.etc.open()
  }

}
