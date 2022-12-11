import { Day } from "../day";


// general ideas:
// compare first digits of range, check which is lower
// compare second digits of range, check which is higher
// if lower and higher are in same range, it contains the other


class Day4 extends Day {

    constructor(){
        super(4);
    }

    solveForPartOne(input: string): string {
        const lines = input.split('\n')
        let count = 0

        const workPairs = lines.map(line => line.split(',').map(schedule => schedule.split('-').map(char => Number(char))))

        workPairs.forEach(assign => {
            // let contains = ''

            if (assign[0][0] <= assign[1][0] && assign[0][1] >= assign[1][1]) {
                count += 1
                // contains = '1 contains 2'
            } else if (assign[1][0] <= assign[0][0] && assign[1][1] >= assign[0][1]) {
                count += 1
                // contains = '2 contains 1'
            } 

        })
        return String(count);
    }

    solveForPartTwo(input: string): string {
        const lines = input.split('\n')
        let count = 0

        const workPairs = lines.map(line => line.split(',').map(schedule => schedule.split('-').map(char => Number(char))))

        workPairs.forEach(assign => {

            if (assign[0][0] === assign[1][0] || (assign[1][0]) >= assign[0][0] && assign[1][0] <= assign[0][1]) {
                count += 1
            } else if (assign[0][1] === assign[1][1] || assign[1][1] >= assign[0][0] && assign[1][0] <= assign[0][1]) {
                count += 1
            }

        })
        
        return String(count);
    }
}

export default new Day4;