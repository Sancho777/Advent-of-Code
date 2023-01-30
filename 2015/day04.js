var md5 = require('md5');
 

function miniexa(){
let x = 0
let plus = 254575
let rest = '123'


while(rest != "00000"){''
    key = 'bgvyzdsv' + plus
    result = md5(key)
    console.log(plus)
    rest = result.split("", 5).join("")
    // console.log(rest)
    plus ++
}

console.log(result)
console.log(plus -1)

}


miniexa()
