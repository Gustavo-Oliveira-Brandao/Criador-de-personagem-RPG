import { IAttack } from "./i-attack";

export interface ISpell extends IAttack {
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
