import day1 from './index';

let testString = `1000
2000
3000

4000

5000
6000

7000
8000
9000

10000`

describe('On Day 1', () =>{
    it(`part1 is identity function`, ()=>{
        expect(day1.solveForPartOne(testString)).toBe('24000');
    })
    it(`part2 is identity function`, ()=>{
        expect(day1.solveForPartTwo(testString)).toBe('45000');
    })
});