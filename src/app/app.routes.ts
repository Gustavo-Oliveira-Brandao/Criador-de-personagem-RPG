import { Routes } from '@angular/router';
import { SkillsActionsComponent } from './pages/character-sheet/partials/skills-actions/skills-actions.component';
import { TalentsComponent } from './pages/character-sheet/partials/talents/talents.component';
import { SpellsComponent } from './pages/character-sheet/partials/spells/spells.component';
import { InventoryComponent } from './pages/character-sheet/partials/inventory/inventory.component';

export const routes: Routes = [
{
    path: "ficha", component: SkillsActionsComponent
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
{
    path: "", redirectTo: "/ficha", pathMatch: "full"
},
{
    path: "**", component: SkillsActionsComponent
}
];
