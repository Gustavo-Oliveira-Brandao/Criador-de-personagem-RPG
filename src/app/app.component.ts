import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CharacterSheetComponent } from "./pages/character-sheet/character-sheet.component";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CharacterSheetComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'ProjetoRPG';
}
