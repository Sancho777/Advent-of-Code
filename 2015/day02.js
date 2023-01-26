const fs = require('fs');
const fileName = "day02input.txt";
const fileData = fs.readFileSync(fileName, "utf8");
const data = fileData.split('\r')

console.log(fileData)


function paper_wrap(measures){
    
    let total = 0
    let ribbon_total = 0

    for(let i = 0; i<measures.length; i++){
        measures[i] = measures[i].replace('\n', '').replaceAll('x', ' ').split(' ')
        const map1 = measures[i].map(x => parseInt(x))
        let x1 = map1[0]*map1[1]
        let x2 = map1[0]*map1[2]
        let x3 = map1[1]*map1[2]
        let paper = [x1,x2,x3]
        let min = Math.min(...paper)
        let ribs = map1.sort(function(a, b){return a - b})
        // console.log(paper)
        // 2x3x4
        let ribbon = ribs[0]*2 + ribs[1]*2 + ribs[0]*ribs[1]*ribs[2]
        total += 2 * x1 + 2 * x2 + 2 * x3 + min
        ribbon_total += ribbon
        // console.log(ribbon)

    }


    return `Wrap: ${total} Ribbon: ${ribbon_total}`
}

console.log(paper_wrap(data))
