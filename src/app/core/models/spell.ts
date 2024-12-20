import { RpgCharacter } from "./character"
import {Modifier} from "./modifier";

export interface Spell {
    id: number
    name: string
    spellRange: string
    spellListName: string
    schoolName: string
    castingTime: string
    target?: string
    level: number
    duration: string
    savingThrow?: string
    area?: string
    description: string
    spellUpgrades?: 
        {
            id?: number
            cost: number
            description: string
        }[]
    
    damages?: {
        diceQuantity: number
        diceSize: number
        damageType: string
        modifiers?: Modifier[]
        damageAttribute: string
    }[]

    rpgCharacter?: RpgCharacter
}
