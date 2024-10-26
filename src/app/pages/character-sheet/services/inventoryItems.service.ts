import {Attribute, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {InventoryItem} from "../../../core/models/inventory-item";
import {first, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class InventoryItemsService {

  private readonly inventoryItemsUrl : string
  constructor(private readonly http: HttpClient) {
    this.inventoryItemsUrl = "http://localhost:8080/api/items"
  }

  list() {
    return this.http.get<InventoryItem[]>(this.inventoryItemsUrl).pipe(first())
  }

  findById(id : number) {
    return this.http.get<InventoryItem>(`${this.inventoryItemsUrl}/${id}`)
  }

  save(item : Partial<InventoryItem>)  {
    if(item.id){
      return this.http.put<InventoryItem>(this.inventoryItemsUrl + "/" + item.id, item).pipe(first())
    }
    return this.http.post<InventoryItem>(this.inventoryItemsUrl, item).pipe(first())
  }

  delete(id: number) {
    return this.http.delete(`${this.inventoryItemsUrl}/${id}`).pipe(first())
  }

}
