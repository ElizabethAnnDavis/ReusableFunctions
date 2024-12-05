/*
 * PART TWO:
 *
 * Use callback functions alongside Array methods to accomplish the following:
 * - Sort the array by age.
 * - Filter the array to remove entries with an age greater than 50.
 * - Map the array to change the “occupation” key to “job” and increment every age by 1.
 * - Use the reduce method to calculate the sum of the ages.
 *   - Then use the result to calculate the average age.
 * 
 * Test Data
 * [{ id: "42", name: "Bruce", occupation: "Knight", age: "41" }, 
 * { id: "48", name: "Barry", occupation: "Runner", age: "25" }, 
 * { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" }, 
 * { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" }, 
 * { id: "7", name: "Bilbo", occupation: "None", age: "111" }]
*/

function sortByAge(arr){
    arr = arr.sort(function(a, b){return a.age - b.age});
    return arr;
}

function removeOverFifty(a){
    a = sortByAge(a);
    for(let i = (a.length - 1); i >= 0; i--){
        if(a[i].age > 50){
            a.pop(a[i]);
        };
    };
    return a;
}

function incrementAges(a){
    for(let i = (a.length - 1); i >= 0; i--){
        a[i].age = Number(a[i].age) + 1;
    };
    return a;
}

function changeOccupationKey(a){
    const arr = a.map(obj => {
        const newObj = {
            ...obj,
            job: obj.occupation
        };
        delete newObj.occupation;
        return newObj;
    })
    incrementAges(arr);

    return arr;
}

function mapToMakeChanges(a){
    a = changeOccupationKey(a);
    a = incrementAges(a);
    return a;
}

function ageData(a){
    const arr = [];
    for(let i = 0; i < a.length; i++){
        arr.push(Number((a[i].age)));
    };
    console.log(arr);
    console.log(addArray(arr));
    console.log(avgArray(arr));
}

function addArray(a){
    let sum = 0;
    for(let i = 0; i < a.length; i++){
        sum += Number(a[i].age);
    }
    return sum;
}

function avgArray(a){
    let sum = addArray(a);
    let avg = sum/a.length;
    return avg;
}



const objArray = [
    { id: "42", name: "Bruce", occupation: "Knight", age: "41" }, 
    { id: "48", name: "Barry", occupation: "Runner", age: "25" }, 
    { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" }, 
    { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" }, 
    { id: "7", name: "Bilbo", occupation: "None", age: "111" }
];



//console.log(addArray(objArray));
//console.log(avgArray(objArray));


let sum = objArray.reduce((total, curNum) => total + Number(curNum.age), 0);

console.log(sum);

let avgVal = sum/objArray.length;

console.log(avgVal);





//console.log(objArray);
//console.log(changeOccupationKey(objArray));

//console.log(sortByAge(objArray));
//console.log(removeOverFifty(objArray));
//console.log(mapToMakeChanges(objArray));
//ageData(objArray);