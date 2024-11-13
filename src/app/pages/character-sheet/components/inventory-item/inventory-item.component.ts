import { Component, Input } from '@angular/core';
import { InventoryItem } from '../../../../core/models/inventory-item';

@Component({
  selector: 'app-inventory-item',
  standalone: true,
  imports: [],
  templateUrl: './inventory-item.component.html',
  styleUrl: './inventory-item.component.sass'
})
export class InventoryItemComponent {

  @Input() item : InventoryItem | null = null

  isExpanded : boolean = false

  expand(){
    this.isExpanded = !this.isExpanded
  }
}
