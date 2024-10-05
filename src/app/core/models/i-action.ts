export interface IAction {
    name: string
    range?: string
    toHitAttribute?: string
    toHit?: number
    dc?: number
    critQuantity?: number
    critMargin?: number
    description?: string
    damageAttributeBonus?: number
    isSpell: boolean
    damages?: [
        {
            quantity: number
            diceSize: number
            attribute: string
            type: string
        }
    ]
}
