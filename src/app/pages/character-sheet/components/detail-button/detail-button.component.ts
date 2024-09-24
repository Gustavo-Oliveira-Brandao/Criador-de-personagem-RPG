import { Component, Input } from '@angular/core';

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
}
