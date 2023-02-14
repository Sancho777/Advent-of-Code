import fs = require('fs');
const fileName = "day05input.txt";
const fileData: string = fs.readFileSync(fileName, "utf8");

const data = fileData.split('\r')
console.log(data)


function niceTextPartOne(lines: string[]){
    let total: number = 0

    lines.forEach((x)=>{
        x = x.replace('\n','')
        const word = x.split('')
        // console.log(word)
        let vog: number = 0
        word.forEach((x)=>{
            // console.log(x)
            if(x =='a' || x == 'e' || x == 'i' || x == 'o' || x == 'u' ){
                vog ++
            }
        })
        // console.log(word)
        if(vog >= 3){
            // console.log(word)
            let check: boolean = false
            for(let i: number = 1; i <word.length; i++ ){
                if(word[i] == word[i-1]){
                    check = true
                }
            }
            if(check == true){
                var isDone: boolean = true
                const items: string[] = ['ab', 'cd', 'pq', 'xy']
                for(let i: number = 1; i <word.length; i++ ){
                    let q: string = word[i-1] + word[i]
                    // console.log(q)
                    for (let element of items) {
                        if (element == q) {
                            isDone = false
                            // console.log(element)
                        }
                    }
                }
                if(isDone == true){
                    total++
                }
            }


        }

    });
    // console.log(total)

    return lines
}

function niceTextPartTwo(lines: string[]){
    let total: number = 0
    let list2: string[] = []

    lines.forEach((x)=>{
        x = x.replace('\n','')
        const word = x.split('')
        console.log(word)

        let check: boolean = false
        let list: string[] = []

            for(let i: number = 1; i <(word.length-1); i++ ){
                let q: string = word[i-1] + word[i] + word[i+1]
                                if(q[0] == q[2]){
                    check = true
                }
                

            }
            if(check == true){
                list2.push(x)
            } check = false
            
            console.log(list2)

            let a:number = 0
            let check2: boolean = false
            let list3: string[] = []
            list2.forEach((x)=>{
                x = x.replace('\n','')
                const word2 = x.split('')
                for(let i: number = 0; i <word2.length -1; i++ ){
                    let q: string = word2[i] + word2[i+1]
                    list3.push(q)
                }
                for(let i: number = 0; i <list3.length; i++ ){
                    for(let d: number = 0; d <list3.length; d++ ){
                        if(list3[i] == list3[d]
                            && i != d
                            && i != d+1
                            && i != d-1){
                            console.log(list3[i], ' ', list3[d], i, ' ', d)
                            check2 = true
                    // console.log(a)
                    }
                    }

                }
                if(check2 == true){
                    a++
                    check2 = false
                }
                list3 = []
                console.log(a)
                            
            }) 
    })
}

niceTextPartTwo(data)