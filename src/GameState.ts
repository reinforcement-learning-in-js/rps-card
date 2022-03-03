export interface Deck {
    R: number
    P: number
    S: number
    J: number
}

export interface GameState {
    myCards: Deck
    oppCards: Deck
    wins: number[]
}