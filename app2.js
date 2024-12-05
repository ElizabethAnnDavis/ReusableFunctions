/*
 * PART THREE:
 *
 * For this section, develop functions that accomplish the following:
 * - Take an object and increment its age field.
 * - Take an object, make a copy, and increment the age field of the copy. Return the copy.
 * For each of the functions above, if the object does not yet contain an age field, 
 * create one and set it to 0. Also, add (or modify, as appropriate) an updated_at 
 * field that stores a Date object with the current time.
*/


function incrementAge(o){
    if(o.hasOwnProperty('age')){
        o.age = Number(o.age) + 1;
    }else{
        addAgeFeild(o);
    };
    timeModified(o);
    return o;
}

function copyObject(o){
    let ob = {...o};
    incrementAge(ob);
    return ob;
}

function addAgeFeild(o){
    o.age = "0";
    return o;
}

function timeModified(o){
    const date = new Date();
    o.updated_at = date.toString();
    console.log(date.toString());//date.getTime());
    return o;
}

let obj1 = { id: "42", name: "Bruce", occupation: "Knight", age: "41" };
let obj2 = { id: "48", name: "Barry", occupation: "Runner"}//, age: "25" };
//let obj3 = { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" };
//let obj4 = { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" };
//let obj5 = { id: "7", name: "Bilbo", occupation: "None", age: "111" };

//console.log(incrementAge(obj1));
console.log(obj1);
let newObj1 = copyObject(obj1);
console.log(obj1);
console.log(newObj1);

console.log(obj2);
let newObj2 = copyObject(obj2);
console.log(obj2);
console.log(newObj2);

//console.log(timeModified(obj1));