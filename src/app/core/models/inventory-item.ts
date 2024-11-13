import { RpgCharacter } from "./character"

export interface InventoryItem {
    id: number
    name: string
    category: string
    quantity?: number
    weight?: number
    currencyValue?: number
    description?: string
    rpgCharacter?: RpgCharacter
}
