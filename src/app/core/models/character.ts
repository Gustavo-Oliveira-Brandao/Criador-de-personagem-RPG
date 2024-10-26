import { Attack } from "./attack"
import { Attribute } from "./attribute"
import { InventoryItem } from "./inventory-item"
import { Skill } from "./skill"
import { Spell } from "./spell"
import { Talent } from "./talent"

export interface RpgCharacter {
    id: number
    name: string
    race: string
    charClass: string
    origin: string
    divinity: string
    level: number
    maxHitPoints: number
    currentHitPoints: number
    temporaryHitPoints: number
    maxManaPoints: number
    currentManaPoints: number
    armorClass: number
    armorPenaltyValue: number
    speed: number
    story: string

    attributes?: Attribute[]

    skills?: Skill[]

    attacks?: Attack[]

    talents?: Talent[]

    spells?: Spell[]

    items?: InventoryItem[]
}
