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

/**************** Functions ****************/
// Sort the array by age.
function sortByAge(arr){
    arr = arr.sort(function(a, b){return a.age - b.age});
    return arr;
}

// Filter the array to remove entries with an age greater than 50.
function removeOverFifty(a){
    a = sortByAge(a);
    for(let i = (a.length - 1); i >= 0; i--){
        if(a[i].age > 50){
            a.pop(a[i]);
        };
    };
    return a;
}

// increment every age by 1
function incrementAges(a){
    for(let i = (a.length - 1); i >= 0; i--){
        a[i].age = Number(a[i].age) + 1;
    };
    return a;
}

// Map the array to change the “occupation” key to “job” and increment every age by 1.
function changeOccupationKey(a){
    const arr = a.map(obj => {
        const newObj = {
            ...obj,
            job: obj.occupation
        };
        delete newObj.occupation;
        return newObj;
    })
    return arr;
}

// Map the array to change the “occupation” key to “job” and increment every age by 1
function mapToMakeChanges(a){
    a = changeOccupationKey(a);
    a = incrementAges(a);
    return a;
}

// Use the reduce method to calculate the sum of the ages
function addArray(a){
    let sum = a.reduce((total, curNum) => total + Number(curNum.age), 0); 
    return sum;
}

// calculate the average age
function avgArray(a){
    return addArray(a)/a.length;
}


/**************** Variables ****************/
const objArray = [
    { id: "42", name: "Bruce", occupation: "Knight", age: "41" }, 
    { id: "48", name: "Barry", occupation: "Runner", age: "25" }, 
    { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" }, 
    { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" }, 
    { id: "7", name: "Bilbo", occupation: "None", age: "111" }
];
let sum = 0;
let avgVal = 0;


/****************** Code *******************/
console.log(objArray);

console.log(sortByAge(objArray));
console.log(removeOverFifty(objArray));
console.log(mapToMakeChanges(objArray));

sum = addArray(objArray);
console.log(sum);

avgVal = avgArray(objArray);
console.log(avgVal);