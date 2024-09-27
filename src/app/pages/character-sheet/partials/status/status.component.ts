import { Component } from '@angular/core';
import { ResourceBarComponent } from "../../components/resource-bar/resource-bar.component";
import { FormsModule } from "@angular/forms"

@Component({
  selector: 'app-status',
  standalone: true,
  imports: [ResourceBarComponent, FormsModule],
  templateUrl: './status.component.html',
  styleUrl: './status.component.sass'
})
export class StatusComponent {

  vidaAtual:number = 64
  vidaMaxima:number = 64
  manaAtual: number = 21
  manaMaxima:number = 21
  vidaTemporaria:number = 0
  ca:number = 23
}
