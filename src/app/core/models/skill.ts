import { RpgCharacter } from "./character"
import {Modifier} from "./modifier";

export interface Skill {
    id: number
    name: string
    totalValue: number
    modifiers: Modifier[]
    training: string
    attribute: string
    trainingRestriction: boolean
    armorPenalty: boolean
    isSavingThrow: boolean
    rpgCharacter?: RpgCharacter
}
