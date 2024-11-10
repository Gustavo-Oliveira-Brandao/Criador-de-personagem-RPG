import { Component } from '@angular/core';
import { SpellComponent } from "../../components/spell/spell.component";

@Component({
  selector: 'app-spells-tab',
  standalone: true,
  imports: [SpellComponent],
  templateUrl: './spells-tab.component.html',
  styleUrl: './spells-tab.component.sass'
})
export class SpellsTabComponent {

}
