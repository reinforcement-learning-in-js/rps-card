import { Deck, GameState } from "./GameState"
import { GameGraph } from './GameGraph'
import { RPSCard } from "./RPSCard"

const d: Deck = {
    R: 1,
    P: 1,
    S: 1,
    J: 0
}

const state: GameState = {
    myCards: d,
    oppCards: d,
    point: [0, 0]
}

const rule = new RPSCard()
const graph: GameGraph = new GameGraph(rule)
graph.train(state, 100000)

graph.nodeMap.forEach((state, key) => console.log(`${key} : ${state.toString()}`))