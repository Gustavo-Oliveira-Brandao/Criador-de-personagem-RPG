export interface ISkill {
    id?: number
    name: string
    totalValue: number
    bonus: number
    training: string
    trainingValue: number
    attribute: string
    trainingRestriction: boolean
    armorPenalty: boolean
    rpgCharacter?: any
    subSkills?: [{
        name: string
        description: string
    }]
}