import { RpgCharacter } from "./character"
import {Modifier} from "./modifier";

export interface Attribute {
    id: number
    name: string
    baseValue: number
    modifiers?: Modifier[]
    rpgCharacter?: RpgCharacter
}
