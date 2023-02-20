const fs = require('fs');
const fileName = "day06input.txt";
const fileData = fs.readFileSync(fileName, "utf8");
var data = fileData.split('\r\n')

// console.log(data)

function lightsOn(data: string[]){

    const m = 1000;
    const  n = 1000;
    let arr = Array(m).fill(null).map(() => Array(n).fill(0));



        //Handeling de input:
        var data2: string[][] = []
        for (var i = 0; i < data.length; i++){
            let x: string[] = data[i].split(' ')

            data2.push(x)
        }
    
        // console.log(data2)

        for (var i = 0; i < data.length; i++){
            if(data2[i][0] == 'turn'){

                if(data2[i][1] == 'on'){

                    let nums: string[] = data2[i][2].split(',')
                    let x1: number = Number(nums[0])
                    let y1: number = Number(nums[1])
                    let nums2: string[] = data2[i][4].split(',')
                    let x2: number = Number(nums2[0])
                    let y2: number = Number(nums2[1])
    
                    // console.log(x1, ' ', y1, ' ', x2, ' ', y2 )

                    for (let i = x1; i <= x2; i++) {
                        for (let j = y1; j <= y2; j++) {
                                arr[i][j] = 1
                        }
                    }

                    // console.log('ligar')
                    
                } else if(data2[i][1] == 'off'){

                    let nums: string[] = data2[i][2].split(',')
                    let x1: number = Number(nums[0])
                    let y1: number = Number(nums[1])
                    let nums2: string[] = data2[i][4].split(',')
                    let x2: number = Number(nums2[0])
                    let y2: number = Number(nums2[1])
    
                    // console.log(x1, ' ', y1, ' ', x2, ' ', y2 )

                    for (let i = x1; i <= x2; i++) {
                        for (let j = y1; j <= y2; j++) {
                                arr[i][j] = 0
                        }
                    }
                    // console.log('desligar')
                }
            }else if(data2[i][0] == 'toggle'){

                let nums: string[] = data2[i][1].split(',')
                let x1: number = Number(nums[0])
                let y1: number = Number(nums[1])
                let nums2: string[] = data2[i][3].split(',')
                let x2: number = Number(nums2[0])
                let y2: number = Number(nums2[1])

                // console.log(x1, ' ', y1, ' ', x2, ' ', y2 )

                for (let i = x1; i <= x2; i++) {
                    for (let j = y1; j <= y2; j++) {
                            if(arr[i][j] == 0){
                                arr[i][j] = 1
                            } else if(arr[i][j] == 1){
                                arr[i][j] = 0
                            }
                    }
                }

                // console.log('trocar')
            }
        }

        var arrText: string ='';
    
        for (var i = 0; i < arr.length; i++) {
            for (var j = 0; j < arr[i].length; j++) {
                arrText+=arr[i][j]+' ';
            }
            console.log(arrText);
            arrText='';
        }
   

    let total = 0
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
            total+=arr[i][j]
        }
    }


    return {total, arr}
}

//Firt

let results = lightsOn(data)
console.log(results.total)