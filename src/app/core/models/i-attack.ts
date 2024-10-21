export interface IAttack {
    name: string
        attackRange: string
        toHit?: number
        toHitSkill: string
        toHitBonus: number
        critMultiplier: number
        critMargin: number
        description?: string
        damages : {
            diceQuantity: number
            diceSize: number
            damageType: string
            bonusDamage: number
            damageAttribute: string
        }[]
}