import { Component } from '@angular/core';
import { TalentComponent } from '../../components/talent/talent.component';

@Component({
  selector: 'app-talents',
  standalone: true,
  imports: [TalentComponent],
  templateUrl: './talents.component.html',
  styleUrl: './talents.component.sass'
})
export class TalentsComponent {

  originTalents:any = [
    {
      name: "Armadilha Mortal",
      action: "Ação padrão",
      preRequisites: "Teste eba",
      description: "Voce coloca uma armadilha braba",
      
    },

    {
      name: "Armadilha Mortal",
      action: "Ação padrão",
      preRequisites: "Teste eba",
      description: "Voce coloca uma armadilha braba",
      
    }
  ]

  classTalents:any = [
    {
      name: "Veneno mortal",
      action: "Ação livre",
      preRequisites: "",
      description: "Voce taca veneno",
      level: 4,

    }
  ]
}
