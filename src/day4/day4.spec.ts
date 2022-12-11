import day4 from './index';

const example = `2-4,6-8
2-3,4-5
5-7,7-9
2-8,3-7
6-6,4-6
2-6,4-8`

describe('On Day 4', () =>{
    it(`part1 is identity function`, ()=>{
        expect(day4.solveForPartOne(example)).toBe('2');
    })
    it(`part2 is identity function`, ()=>{
        expect(day4.solveForPartTwo(example)).toBe('4');
    })
});