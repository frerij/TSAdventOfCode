import { parse } from "path";
import { Day } from "../day";

class Day2 extends Day {

    constructor(){
        super(2);
    }
    // A = rock, B = paper, C = scissors
    // X = rock, Y = paper, Z = scissors

    // C > Y > A : Y === B
    // B > X > C : X === A
    // A > Z > B : Z === C

    // scores: 
    // rock = 1, paper = 2, scissors = 3
    // win = 6, tie = 3, lose = 0



    solveForPartOne(input: string): string {
        const scores: Record<string, number> = {'X': 1, 'Y': 2, 'Z': 3}

        function playerWin(playerMove: string, opponentMove: string) {
            switch(opponentMove) {
                case 'A':
                    return playerMove === 'Y'
                case 'B':
                    return playerMove === 'Z'
                case 'C':
                    return playerMove === 'X' 
            }
        }

        function playerTie(playerMove: string, opponentMove: string) {
            switch(opponentMove) {
                case 'A':
                    return playerMove === 'X'
                case 'B':
                    return playerMove === 'Y'
                case 'C':
                    return playerMove === 'Z' 
            }
        }

        const parsedInput = input.split('\n');
        let score = 0;

        for (let i = 0; i < parsedInput.length; i++) {
            const opponent = parsedInput[i][0]
            const self = parsedInput[i][2]
            score += scores[self]

            if (playerWin(self, opponent) === true) {
                score += 6
            } 

            if (playerTie(self, opponent) === true) {
                score += 3
            }
            
        }

        return String(score);
    }

    // A = rock, B = paper, C = scissors
    // X = lose, Y = tie, Z = win

    // X = 0, Y = 3, Z = 6
    // A = 1, B = 2, C = 3

    // scores: 
    // rock = 1, paper = 2, scissors = 3
    // win = 6, tie = 3, lose = 0

    solveForPartTwo(input: string): string {
        function shapeFinder(opponentMove: string, outcome: string) {
            switch(outcome) {
                case 'X':
                    if (opponentMove === 'A') {
                        return 'C'
                    } else if (opponentMove === 'B') {
                        return 'A'
                    } else {
                        return 'B'
                    }
                case 'Y':
                    if (opponentMove === 'A') {
                        return 'A'
                    } else if (opponentMove === 'B') {
                        return 'B'
                    } else {
                        return 'C'
                    }
                case 'Z':
                    if (opponentMove === 'A') {
                        return 'B'
                    } else if (opponentMove === 'B') {
                        return 'C'
                    } else {
                        return 'A'
                    }
            }
        }

        const parsedInput = input.split('\n')
        const outcomeScores: Record<string, number> = {'X': 0, 'Y': 3, 'Z': 6}
        const shapeScores: Record<string, number> = {'A': 1, 'B': 2, 'C': 3}
        let score = 0;
        
        for (let i = 0; i < parsedInput.length; i++) {
            const opponent = parsedInput[i][0]
            const outcome = parsedInput[i][2]
            const shape = shapeFinder(opponent, outcome)

            score += outcomeScores[outcome]

            if (shape != undefined) {
                score += shapeScores[shape]
            }
            
        }

        return String(score);
    }
}

export default new Day2;