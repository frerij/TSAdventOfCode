import { Day } from "../day";

class Day3 extends Day {

    constructor(){
        super(3);
    }

    solveForPartOne(input: string): string {
        const rucksacks = input.split('\n')
        let sum = 0;
        let priority = '';

        let data = rucksacks[0]
        let test = []

        rucksacks.forEach(pack => {
            let map: string[] = []
            let compartment1 = pack.slice(0, (pack.length)/2)
            let compartment2 = pack.slice(pack.length / 2)

            for (let i = 0; i < compartment1.length; i++) {
                if (map.includes(compartment1[i])) {
                    continue
                } else {
                    map.push(compartment1[i])
                }
            }

            for (let j = 0; j < compartment2.length; j++) {
                if (map.includes(compartment2[j])) {
                    priority = compartment2[j]
                    break
                }
            }

            if (priority === priority.toUpperCase()) {
                sum += priority.charCodeAt(0) - 38
            } else {
                sum += priority.charCodeAt(0) - 96
            }
        })

        return String(sum);
    }

    solveForPartTwo(input: string): string {
        const rucksacks = input.split('\n')
        const groups: string[][] = []
        let tempGroup: string[] = []
        let sum = 0
        let badge = ''

        rucksacks.forEach((pack, i) => {
            tempGroup.push(pack)

            if (i > 0 && (i + 1) % 3 === 0) {
                groups.push(tempGroup)
                tempGroup = []
            }
        })

        groups.forEach(group => {
            let map1: string[] = []
            let map2: string[] = []

            
            for (let char1 of group[0]) {
                map1.push(char1)
            }
            

            for (let char2 of group[1]) {
                map2.push(char2)
            }

            for (let char3 of group[2]) {
                if (map1.includes(char3) && map2.includes(char3)) {
                    badge = char3
                    break
                }
            }
            
            if (badge === badge.toUpperCase()) {
                sum += badge.charCodeAt(0) - 38
            } else {
                sum += badge.charCodeAt(0) - 96
            } 
        })

        return String(sum);
    }
}

export default new Day3;