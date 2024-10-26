import { RpgCharacter } from "./character"

export interface Talent {
    id: number
    name: string
    category: string
    execution: string
    preRequisites: string
    description: string
    rpgCharacter?: RpgCharacter
}
