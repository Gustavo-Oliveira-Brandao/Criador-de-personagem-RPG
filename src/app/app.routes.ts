import { Routes } from '@angular/router';
import { CharacterSheetComponent } from './pages/character-sheet/character-sheet.component';
import { CharacterSelectionComponent } from './pages/character-selection/character-selection.component';
import { CharacterCreationComponent } from './pages/character-creation/character-creation.component';

export const routes: Routes = [
    {
        path: "character-selection", component: CharacterSelectionComponent
    },
    {
        path: "character-creation", component: CharacterCreationComponent
    },
    {
        path: "sheet", component: CharacterSheetComponent
    },
    {
        path: "", redirectTo: "/character-selection", pathMatch: "full"
    },
    {
        path: "**", component: CharacterSelectionComponent
    }
];
