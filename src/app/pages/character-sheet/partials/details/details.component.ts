import { Component } from '@angular/core';
import { DetailButtonComponent } from "../../components/detail-button/detail-button.component";


@Component({
  selector: 'app-details',
  standalone: true,
  imports: [DetailButtonComponent],
  templateUrl: './details.component.html',
  styleUrl: './details.component.sass'
})
export class DetailsComponent {

  nome:string = "Makoto"
  nivel:number = 5

  click(){
    console.log("Clicado")
  }
}
