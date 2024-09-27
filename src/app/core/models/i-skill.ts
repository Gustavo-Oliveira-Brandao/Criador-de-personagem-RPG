export interface ISkill {
    name: string,
    value: number,
    bonus: number,
    training: string,
    trainingValue: number,
    attribute: string,
    subSkills?: [{
        name: string,
        description: string
    }]
}
