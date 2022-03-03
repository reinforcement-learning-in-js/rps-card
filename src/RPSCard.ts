import { Deck, GameState } from "./GameState"

export class RPSCard {
    toStringDeck(d: Deck):string {
        return `[${d.R}R,${d.P}P,${d.S}S,${d.J}J]`
    }

    getKey(gameState: GameState) {
        return `${this.toStringDeck(gameState.myCards)}/${this.toStringDeck(gameState.oppCards)}/${gameState.wins}`
    }

    getActions(myCards: Deck): string[] {
        const actions = []
        for (const [key, value] of Object.entries(myCards)) {
            if (value > 0) {
                actions.push(key)
            }
        }
        return actions
    }
}