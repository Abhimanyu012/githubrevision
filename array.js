const myArray = [1, 2, 3, 4, 5, 6];
// console.log(myArray[1]);
//  myArray.push("name")
//  myArray.pop();

// myArray.unshift(0); 
// myArray.shift();

// const newAray = myArray.join()
// console.log( (newAray));

// ***** slice and splice ****//
console.log("A", myArray);
const newArr1 = myArray.slice(1, 3);
console.log("After slice ( 1 , 3 ) ", newArr1);
console.log("B", myArray);
const newArr2 = myArray.splice(1, 3);
console.log("after splice ( 1 , 3 ) ", newArr2);
console.log("C", myArray);

