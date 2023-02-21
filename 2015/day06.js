var fs = require('fs');
var fileName = "day06input.txt";
var fileData = fs.readFileSync(fileName, "utf8");
var data = fileData.split('\r\n');
// console.log(data)
function lightsOn(data) {
    var m = 1000;
    var n = 1000;
    var arr = Array(m).fill(null).map(function () { return Array(n).fill(0); });
    //Handeling de input:
    var data2 = [];
    for (var i = 0; i < data.length; i++) {
        var x = data[i].split(' ');
        data2.push(x);
    }
    // console.log(data2)
    for (var i = 0; i < data.length; i++) {
        if (data2[i][0] == 'turn') {
            if (data2[i][1] == 'on') {
                var nums = data2[i][2].split(',');
                var x1 = Number(nums[0]);
                var y1 = Number(nums[1]);
                var nums2 = data2[i][4].split(',');
                var x2 = Number(nums2[0]);
                var y2 = Number(nums2[1]);
                // console.log(x1, ' ', y1, ' ', x2, ' ', y2 )
                for (var i_1 = x1; i_1 <= x2; i_1++) {
                    for (var j_1 = y1; j_1 <= y2; j_1++) {
                        arr[i_1][j_1] = 1;
                    }
                }
                // console.log('ligar')
            }
            else if (data2[i][1] == 'off') {
                var nums = data2[i][2].split(',');
                var x1 = Number(nums[0]);
                var y1 = Number(nums[1]);
                var nums2 = data2[i][4].split(',');
                var x2 = Number(nums2[0]);
                var y2 = Number(nums2[1]);
                // console.log(x1, ' ', y1, ' ', x2, ' ', y2 )
                for (var i_2 = x1; i_2 <= x2; i_2++) {
                    for (var j_2 = y1; j_2 <= y2; j_2++) {
                        arr[i_2][j_2] = 0;
                    }
                }
                // console.log('desligar')
            }
        }
        else if (data2[i][0] == 'toggle') {
            var nums = data2[i][1].split(',');
            var x1 = Number(nums[0]);
            var y1 = Number(nums[1]);
            var nums2 = data2[i][3].split(',');
            var x2 = Number(nums2[0]);
            var y2 = Number(nums2[1]);
            // console.log(x1, ' ', y1, ' ', x2, ' ', y2 )
            for (var i_3 = x1; i_3 <= x2; i_3++) {
                for (var j_3 = y1; j_3 <= y2; j_3++) {
                    if (arr[i_3][j_3] == 0) {
                        arr[i_3][j_3] = 1;
                    }
                    else if (arr[i_3][j_3] == 1) {
                        arr[i_3][j_3] = 0;
                    }
                }
            }
            // console.log('trocar')
        }
    }
    var arrText = '';
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
            arrText += arr[i][j] + ' ';
        }
        console.log(arrText);
        arrText = '';
    }
    var total = 0;
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
            total += arr[i][j];
        }
    }
    return { total: total, arr: arr };
}
function lightsOn2(data) {
    var m = 1000;
    var n = 1000;
    var arr = Array(m).fill(null).map(function () { return Array(n).fill(0); });
    //Handeling de input:
    var data2 = [];
    for (var i = 0; i < data.length; i++) {
        var x = data[i].split(' ');
        data2.push(x);
    }
    // console.log(data2)
    for (var i = 0; i < data.length; i++) {
        if (data2[i][0] == 'turn') {
            if (data2[i][1] == 'on') {
                var nums = data2[i][2].split(',');
                var x1 = Number(nums[0]);
                var y1 = Number(nums[1]);
                var nums2 = data2[i][4].split(',');
                var x2 = Number(nums2[0]);
                var y2 = Number(nums2[1]);
                // console.log(x1, ' ', y1, ' ', x2, ' ', y2 )
                for (var i_4 = x1; i_4 <= x2; i_4++) {
                    for (var j_4 = y1; j_4 <= y2; j_4++) {
                        arr[i_4][j_4] += 1;
                    }
                }
                // console.log('ligar')
            }
            else if (data2[i][1] == 'off') {
                var nums = data2[i][2].split(',');
                var x1 = Number(nums[0]);
                var y1 = Number(nums[1]);
                var nums2 = data2[i][4].split(',');
                var x2 = Number(nums2[0]);
                var y2 = Number(nums2[1]);
                // console.log(x1, ' ', y1, ' ', x2, ' ', y2 )
                for (var i_5 = x1; i_5 <= x2; i_5++) {
                    for (var j_5 = y1; j_5 <= y2; j_5++) {
                        if (arr[i_5][j_5] > 0) {
                            arr[i_5][j_5] -= 1;
                        }
                    }
                }
                // console.log('desligar')
            }
        }
        else if (data2[i][0] == 'toggle') {
            var nums = data2[i][1].split(',');
            var x1 = Number(nums[0]);
            var y1 = Number(nums[1]);
            var nums2 = data2[i][3].split(',');
            var x2 = Number(nums2[0]);
            var y2 = Number(nums2[1]);
            // console.log(x1, ' ', y1, ' ', x2, ' ', y2 )
            for (var i_6 = x1; i_6 <= x2; i_6++) {
                for (var j_6 = y1; j_6 <= y2; j_6++) {
                    arr[i_6][j_6] += 2;
                }
            }
            // console.log('trocar')
        }
    }
    var arrText = '';
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
            arrText += arr[i][j] + ' ';
        }
        console.log(arrText);
        arrText = '';
    }
    var total = 0;
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
            total += arr[i][j];
        }
    }
    return { total: total, arr: arr };
}
var results = lightsOn2(data);
console.log(results.total);
