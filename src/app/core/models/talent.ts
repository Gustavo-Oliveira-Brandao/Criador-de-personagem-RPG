import { RpgCharacter } from "./character"

export interface Talent {
    id: number
    name: string
    category: string
    castingTime: string
    preRequisites: string
    description: string
    rpgCharacter?: RpgCharacter
}
