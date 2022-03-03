import { GameState, Deck } from './GameState'
import { InfoState } from './InfoState'
import { RPSCard } from './RPSCard'

const d: Deck = {
    R: 0,
    P: 1,
    S: 1,
    J: 1
}

const g: GameState = {
    myCards: d,
    oppCards: d,
    point: [0, 0]
}

const rps = new RPSCard()
const x = new InfoState(g, rps)

console.log(x.actions)
console.log(x.getStrategy())
console.log(rps.getKey(g))

console.log(x.getAction())
console.log(x.getAction())
console.log(x.getAction())
console.log(x.getAction())