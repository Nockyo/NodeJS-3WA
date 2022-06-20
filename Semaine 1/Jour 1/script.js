//Exo 1

// let newArr = [];
// let array = [1,2,3];

// const myMap = (arr, func) => {
//     for(let i = 0; i < arr.length; i++){
//         newArr.push(func(arr[i]));
//     }
//     return newArr
// };


// le + avant el correspond à parseInt
// la fonction fléchée en argument func permet de rendre implicite le return quand il n'y a qu'un élément
// console.log(myMap(array, (el) => +el * 2));

//Exo 2

// let filteredArr = [];
// let array = [1,2,3];

// const myFilter = (arr, func) => {
//     for(let i = 0; i < arr.length; i++){
//         if(func(arr[i]) === true) filteredArr.push(arr[i]);
//     }
//     return filteredArr
// };

// const func = (arg) => {
//     return arg > 0 ? true : false;
// };

// console.log(myFilter(array, func));

//Exo3

// MyReduce = (arr, fn, initialValue) => {
//     let accumulator = initialValue ?? 0;

//     for(let i =0; i < arr.length; i++){
//         accumulator = fn(accumulator, arr[i]);
//     };

//     return accumulator
// }

// const func = (acc, val) => acc + val;

// console.log("myReduce", MyReduce(exemple, func, 100));

//Exo 4

/**
 * 
 * @param {Array} arr An array containing values
 * @returns An array containing only truthy values
 */

 /*function falsyBouncer(arr) {
    return arr.filter(Boolean);
  }
  
  
  console.log(falsyBouncer(['a', 'b', 'c', 'd'])) // a b c d
  console.log(falsyBouncer([1, 0, "pouet", false, undefined, "machin-truc", 32, NaN, null, "hello world", ""])) // 1 pouet machin-truc 32 hello world
  */

  
  