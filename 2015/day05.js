"use strict";
exports.__esModule = true;
var fs = require("fs");
var fileName = "day05input.txt";
var fileData = fs.readFileSync(fileName, "utf8");
var data = fileData.split('\r');
console.log(data);
function niceTextPartOne(lines) {
    var total = 0;
    lines.forEach(function (x) {
        x = x.replace('\n', '');
        var word = x.split('');
        // console.log(word)
        var vog = 0;
        word.forEach(function (x) {
            // console.log(x)
            if (x == 'a' || x == 'e' || x == 'i' || x == 'o' || x == 'u') {
                vog++;
            }
        });
        // console.log(word)
        if (vog >= 3) {
            // console.log(word)
            var check = false;
            for (var i = 1; i < word.length; i++) {
                if (word[i] == word[i - 1]) {
                    check = true;
                }
            }
            if (check == true) {
                var isDone = true;
                var items = ['ab', 'cd', 'pq', 'xy'];
                for (var i = 1; i < word.length; i++) {
                    var q = word[i - 1] + word[i];
                    // console.log(q)
                    for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
                        var element = items_1[_i];
                        if (element == q) {
                            isDone = false;
                            // console.log(element)
                        }
                    }
                }
                if (isDone == true) {
                    total++;
                }
            }
        }
    });
    // console.log(total)
    return lines;
}
function niceTextPartTwo(lines) {
    var total = 0;
    var list2 = [];
    lines.forEach(function (x) {
        x = x.replace('\n', '');
        var word = x.split('');
        console.log(word);
        var check = false;
        var list = [];
        for (var i = 1; i < (word.length - 1); i++) {
            var q = word[i - 1] + word[i] + word[i + 1];
            if (q[0] == q[2]) {
                check = true;
            }
        }
        if (check == true) {
            list2.push(x);
        }
        check = false;
        console.log(list2);
        var a = 0;
        var check2 = false;
        var list3 = [];
        list2.forEach(function (x) {
            x = x.replace('\n', '');
            var word2 = x.split('');
            for (var i = 0; i < word2.length - 1; i++) {
                var q = word2[i] + word2[i + 1];
                list3.push(q);
            }
            for (var i = 0; i < list3.length; i++) {
                for (var d = 0; d < list3.length; d++) {
                    if (list3[i] == list3[d]
                        && i != d
                        && i != d + 1
                        && i != d - 1) {
                        console.log(list3[i], ' ', list3[d], i, ' ', d);
                        check2 = true;
                        // console.log(a)
                    }
                }
            }
            if (check2 == true) {
                a++;
                check2 = false;
            }
            list3 = [];
            console.log(a);
        });
    });
}
niceTextPartTwo(data);
