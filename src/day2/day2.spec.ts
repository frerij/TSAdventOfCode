import day2 from './index';

let exampleInput = `A Y
B X
C Z`

describe('On Day 2', () =>{
    it(`part1 is identity function`, ()=>{
        expect(day2.solveForPartOne(exampleInput)).toBe('15');
    })
    it(`part2 is identity function`, ()=>{
        expect(day2.solveForPartTwo(exampleInput)).toBe('12');
    })
});