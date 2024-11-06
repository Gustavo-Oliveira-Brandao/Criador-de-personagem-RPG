import { RpgCharacter } from "./character"
import {Modifier} from "./modifier";

export interface Attack {
    id: number
    name: string
    attackRange: string
    rangeInMeters ?: number
    toHit: number
    toHitSkill: string
    modifiers: Modifier[]
    critMultiplier: number
    critMargin: number
    description?: string
    damages: {
        diceQuantity: number
        diceSize: number
        damageType: string
        modifiers: Modifier[]
        damageAttribute: string
        totalBonus: number
    }[]
    rpgCharacter?: RpgCharacter
}
