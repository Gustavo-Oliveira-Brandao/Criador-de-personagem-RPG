import { Component, Input } from '@angular/core';
import { SpellComponent } from "../../components/spell/spell.component";
import { Spell } from '../../../../core/models/spell';

@Component({
  selector: 'app-spells-tab',
  standalone: true,
  imports: [SpellComponent],
  templateUrl: './spells-tab.component.html',
  styleUrl: './spells-tab.component.sass'
})
export class SpellsTabComponent {

  @Input() spells : Spell[] | null = null
}
