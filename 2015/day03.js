const fs = require('fs');
const fileName = "day03input.txt";
const fileData = fs.readFileSync(fileName, "utf8");
const data = fileData.split('')

// console.log(data)

function giftHouses(data){

    const m = 1000;
    const  n = 1000;
    let arr = Array(m).fill(null).map(() => Array(n).fill(0));

    let x = 500
    let y = 500
    arr[x][y] = 1
    let total = 1

    for(let i = 0; i<data.length; i++){
        if(data[i] == '^'){
            x+=1
        } else if (data[i] == 'v'){
            x-=1
        } else if (data[i] == '>'){
            y+=1
        } else if (data[i] == '<'){
            y-=1
        }
        if(arr[x][y] == 0){
            total +=1
        }
        arr[x][y] = 1
    }

    // console.log(total)
    return {total, arr}
}

function giftHouses2(data){

    const m = 1000;
    const  n = 1000;
    let arr = Array(m).fill(null).map(() => Array(n).fill(0));

    // console.log(arr.length)

    const odd = []
    const even = []

    for (var i = 0; i < data.length; i++) {
        if (i %2 == 0) {
          even.push(data[i])
        } else {
            odd.push(data[i])
        }
      }
      console.log(even)
      console.log(odd)

    let x = 500
    let y = 500
    arr[x][y] = 1
    let total = 1

    for(let i = 0; i<odd.length; i++){
        if(odd[i] == '^'){
            x+=1
        } else if (odd[i] == 'v'){
            x-=1
        } else if (odd[i] == '>'){
            y+=1
        } else if (odd[i] == '<'){
            y-=1
        }
        if(arr[x][y] == 0){
            total +=1
        }
        arr[x][y] = 1
    }

    x = 500
    y = 500

    for(let i = 0; i<even.length; i++){
        if(even[i] == '^'){
            x+=1
        } else if (even[i] == 'v'){
            x-=1
        } else if (even[i] == '>'){
            y+=1
        } else if (even[i] == '<'){
            y-=1
        }
        if(arr[x][y] == 0){
            total +=1
        }
        arr[x][y] = 1
    }

    // console.log(total)
    return {total, arr}
}

//Firt
// let results = giftHouses(data)
// console.log(results.total)
// console.log(results.arr)

//Second
let results = giftHouses2(data)
console.log(results.total)