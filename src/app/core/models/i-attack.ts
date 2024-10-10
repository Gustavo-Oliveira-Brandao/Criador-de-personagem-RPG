export interface IAttack {
    name: string
    range?: string
    toHitSkill?: string
    toHit?: number
    critQuantity?: number
    critMargin?: number
    description?: string
    damageAttributeBonus?: number
    isSpell?: boolean
    damages?: [
        {
            quantity: number
            diceSize: number
            attribute: string
            type: string
        }
    ]
}
