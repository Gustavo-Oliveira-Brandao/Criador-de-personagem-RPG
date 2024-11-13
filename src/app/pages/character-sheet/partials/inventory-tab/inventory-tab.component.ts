import { Component } from '@angular/core';
import { InventoryItemComponent } from "../../components/inventory-item/inventory-item.component";

@Component({
  selector: 'app-inventory-tab',
  standalone: true,
  imports: [InventoryItemComponent],
  templateUrl: './inventory-tab.component.html',
  styleUrl: './inventory-tab.component.sass'
})
export class InventoryTabComponent {

}
