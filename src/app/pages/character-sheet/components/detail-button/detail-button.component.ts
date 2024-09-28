import { Component, Input } from '@angular/core';
import { EditTabControlService } from '../../services/edit-tab-control.service';

@Component({
  selector: 'app-detail-button',
  standalone: true,
  imports: [],
  templateUrl: './detail-button.component.html',
  styleUrl: './detail-button.component.sass'
})
export class DetailButtonComponent {

  @Input() icon: string = ""
  @Input() texto: string = ""

  constructor(private editTab: EditTabControlService){}

  edit(){
    this.editTab.openTab="details"
    this.editTab.open()
  }
}
