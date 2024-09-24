import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-resource-bar',
  standalone: true,
  imports: [],
  templateUrl: './resource-bar.component.html',
  styleUrl: './resource-bar.component.sass'
})
export class ResourceBarComponent {

  @Input() icon: string = ""
  @Input() atual: number = 0
  @Input() max: number = 0
  @Input() css: string = ""

  barWidth:number = 0

  ngOnInit() {
    this.barWidth = (this.atual / this.max) * 100
  }
}
