import { Component, Input } from '@angular/core';
import { ExpandedTabControlService } from '../../services/expanded-tab-control.service';

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

  constructor(private readonly etc : ExpandedTabControlService){}


  edit(){
    this.etc.tab = "details"
    this.etc.open()
  }
}
