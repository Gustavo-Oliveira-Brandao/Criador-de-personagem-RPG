import { RpgCharacter } from "./character"

export interface InventoryItem {
    id: number
    name: string
    quantity?: number
    weight?: number
    currencyValue?: number
    rpgCharacter?: RpgCharacter
}
