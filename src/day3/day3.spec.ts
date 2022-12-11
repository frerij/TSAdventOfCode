import day3 from './index';

const example = `vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw`

describe('On Day 3', () =>{
    it(`part1 is identity function`, ()=>{
        expect(day3.solveForPartOne(example)).toBe('157');
    })
    it(`part2 is identity function`, ()=>{
        expect(day3.solveForPartTwo(example)).toBe('70');
    })
});