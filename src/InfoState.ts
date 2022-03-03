import { GameState } from './GameState'
import { RPSCard } from './RPSCard'

export class InfoState {
    gameState: GameState
    actions: string[]
    regretSum: number[]
    strategySum: number[]

    util: number
    visit: number

    constructor(gameState: GameState, rpsCard: RPSCard) {
        this.gameState = gameState

        this.actions = rpsCard.getActions(gameState.myCards)
        this.regretSum = new Array(this.actions.length).fill(0)
        this.strategySum = new Array(this.actions.length).fill(0)

        this.util = 0
        this.visit = 0
    }

    getStrategy(): number[] {
        const strategy = this.regretSum.map((item) => item > 0 ? item : 0)
        const normalizingSum = strategy.reduce((accum, val) => accum + val, 0)
        if (normalizingSum > 0) {
            return strategy.map((val) => val/normalizingSum)
        } else {
            const add = 1/strategy.length
            return new Array(strategy.length).fill(add)
        }
    }

    
}