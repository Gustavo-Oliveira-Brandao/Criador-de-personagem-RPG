import { IAttack } from "./i-attack"
import { IAttribute } from "./i-attribute"
import { ISkill } from "./i-skill"
import { ISpell } from "./i-spell"
import { ITalent } from "./i-talent"

export interface RpgCharacter {
    id?: number
    name: string
    race: string
    charClass: string
    origin: string
    divinity: string
    level: number
    maxHitPoints: number
    actualHitPoints: number
    temporaryHitPoints: number
    maxManaPoints: number
    actualManaPoints: number
    armorClass: number
    armorPenaltyValue: number
    speed: number
    story: string

    attributes: IAttribute[]

    savingThrows: ISkill[]

    skills: ISkill[]

    attacks?: IAttack[]

    talents: ITalent[]

    spells?: ISpell[]

    items: []
}