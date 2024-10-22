
export interface ISpell {
    id?: number
    list: string
    school: string
    execution: string
    target?: string
    duration: string
    savingThrow?: string
    area?: string
    upgrades: [
        {
            cost: number
            description: string
        }
    ]
}
