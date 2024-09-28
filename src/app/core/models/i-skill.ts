export interface ISkill {
    name: string,
    value: number,
    bonus: number,
    training: string,
    trainingValue: number,
    attribute: string,
    traningRestriction?: boolean,
    armorPenalty?: boolean,
    subSkills?: [{
        name: string,
        description: string
    }]
}
