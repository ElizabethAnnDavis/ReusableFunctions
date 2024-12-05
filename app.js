/*
 * PART ONE:
 * 
 * Take an array of numbers and return the sum.
 * Take an array of numbers and return the average.
 * Take an array of strings and return the longest string.
 * Take an array of strings, and a number and return an array of the strings that are longer than the given number. 
 * For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3); would return ["hello", "morning"].
 * Take a number, n, and print every number between 1 and n without using loops.   Use recursion.
*/

function addArray(a){
    sum = 0;
    for(let i = 0; i < a.length; i++){
        sum += a[i];
    }
    return sum;
}

function avgArray(a){
    let sum = addArray(a);
    let avg = sum/a.length;              
    return avg;
}

function longestString(a){
    let str = "";
    for(let i = 0; i < a.length; i++){
        if(i === 0){
            str = a[i];
        }else if(a[i].length > str.length) {
            str = a[i];
        };
    }
    return str;
}

function longerThanNum(a, n){
    let strs = [];
    for(let i = 0; i < a.length; i++){
        if(a[i].length > n){
            strs.push(a[i]);
        };
    }
    return strs;
}

function printNums(n){
    let a = [];
    for(let i = 1; i <= n; i++){
        a.push(i);
    };
    a.forEach((a)=>{
        console.log(a);
    });
    return a;
}

let anArray = [1, 2, 3, 4, 5];
let num1 = 3;
let num2 = 13;
let strArray =["some", "words", "to", "simply", "fill", "the", "array"];

console.log(addArray(anArray));
console.log(avgArray(anArray));
console.log(longestString(strArray));
console.log(longerThanNum(strArray, num1));
printNums(num2);