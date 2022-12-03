import { reverse } from "dns";
import { Day } from "../day";

class Day1 extends Day {

    constructor(){
        super(1);
    }

    solveForPartOne(input: string): string {
        let parsedInput = input.split('\n')
        let currentSum = 0;
        let maxSum = 0;

        for (let num of parsedInput) {
            if (num === '') {
                if (currentSum > maxSum) {
                    maxSum = currentSum;
                    currentSum = 0;
                } else {
                    currentSum = 0;
                }
            } else {
                currentSum += Number(num);
            }
        }
        

        return String(maxSum);
    }

    solveForPartTwo(input: string): string {
        let newInput = input.split('\n');
        let sums = [];
        let tempSum = 0;


        for (let num of newInput) {
            if (num === '') {
                sums.push(tempSum);
                tempSum = 0;
            } else {
                tempSum += Number(num);
            }
        }
        sums.push(tempSum)


        let sortedSums = sums.sort(function(a, b) {
            return b - a;
          });
        let topThree = 0;


        for (let i = 0; i < 3; i++) {
            topThree += Number(sortedSums[i])

        }

        return String(topThree);
    }
}

export default new Day1;