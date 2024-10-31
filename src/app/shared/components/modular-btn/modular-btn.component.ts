import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-modular-btn',
  standalone: true,
  imports: [],
  templateUrl: './modular-btn.component.html',
  styleUrl: './modular-btn.component.sass'
})
export class ModularBtnComponent {

  @Output() onClickEvent = new EventEmitter()

  @Input() icon : string = ""
  @Input() css : string = ""
  @Input() text : string = ""

  onClick(){
    this.onClickEvent.emit()
  }
}
