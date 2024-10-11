export interface IAttack {
    name: string
    range: string
    toHitSkill: string
    toHit: number
    toHitBonus: number
    critMultiplier: number
    critMargin: number
    description?: string
    damages: [
        {
            quantity: number
            diceSize: number
            type: string
            bonus: number,
            attribute: string
        }
    ]
}
