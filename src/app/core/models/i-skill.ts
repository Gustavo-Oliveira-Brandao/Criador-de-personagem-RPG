export interface ISkill {
    name: string,
    totalValue: number,
    bonus: number,
    training: string,
    trainingValue: number,
    attribute: string,
    subSkills?: [{
        name: string,
        description: string
    }]
}
