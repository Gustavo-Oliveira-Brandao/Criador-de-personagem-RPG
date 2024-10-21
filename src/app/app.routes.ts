import { Routes } from '@angular/router';
import { SkillsAttacksComponent } from './pages/character-sheet/partials/skills-attacks/skills-attacks.component';
import { TalentsComponent } from './pages/character-sheet/partials/talents/talents.component';
import { SpellsComponent } from './pages/character-sheet/partials/spells/spells.component';
import { InventoryComponent } from './pages/character-sheet/partials/inventory/inventory.component';
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
        path: "home", component: CharacterSheetComponent, children: [
            {
                path: "", component: SkillsAttacksComponent
            },
            {
                path: "habilidades", component: TalentsComponent
            },
            {
                path: "inventario", component: InventoryComponent
            },
            {
                path: "magias", component: SpellsComponent
            },
        ]
    },
    {
        path: "", redirectTo: "/character-selection", pathMatch: "full"
    },
    {
        path: "**", component: CharacterSelectionComponent
    }
];
