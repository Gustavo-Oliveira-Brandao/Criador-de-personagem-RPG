import { Component } from '@angular/core';
import { DetailsComponent } from "./partials/details/details.component";
import { StatusComponent } from "./partials/status/status.component";
import { AttributesComponent } from "./partials/attributes/attributes.component";
import { SecondaryStatusComponent } from "./partials/secondary-status/secondary-status.component";

@Component({
  selector: 'app-character-sheet',
  standalone: true,
  imports: [DetailsComponent, StatusComponent, AttributesComponent, SecondaryStatusComponent],
  templateUrl: './character-sheet.component.html',
  styleUrl: './character-sheet.component.sass'
})
export class CharacterSheetComponent {

}
