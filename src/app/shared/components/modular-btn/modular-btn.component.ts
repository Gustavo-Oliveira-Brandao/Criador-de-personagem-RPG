import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-modular-btn',
  standalone: true,
  imports: [],
  templateUrl: './modular-btn.component.html',
  styleUrl: './modular-btn.component.sass'
})
export class ModularBtnComponent {

  @Input() callbackFunction !: (args: any) => void
  @Input() css: string = ""
  @Input() text: string = ""
  @Input() args:any
  
  callParentFunction(args:any){
    this.callbackFunction(args)
  }
}
