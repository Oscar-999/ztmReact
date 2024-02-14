// const myArray = [1,2,3,4];

// myArray.map(e => e + 1)
// [2,3,4,5]
// Creates new Arrays

// .filter()
//New array
// const myArray = [1,3,5,7,9]
// myArray.filter(el => el> 4)
// [5,7,9]

// myArray.includes()
// const myArray =[1,2,3,4,5]
// myArray.includes(3)
// true
// myArray.includes(9) => false

// const newArray = [{ id: 1 }, { id: 2 }, { id: 3 }];
// Index includes if 2 is included staring at index 3
// myArray.includes(2,3) => false

//! Primitive Types
//  Strings,booleans,null,undef,number,symbol


//! Find
// returns on the first element found
// const myArray = [1,3,5,7,9]

// myArray.find(el => el === 5) //5

// myArray.find(el => el > 4) //5

// const peopleArray = [{id:1}, {id:4}, {id:7}]
// peopleArray.find(person => person.id === 4) // {id: 4}


//! Reduce
// want to end up with one value at the end

const array = [1,2,3,4,5]

array.reduce((accumulator, currentElement) => accumulator + currentElement, 0) //15
array.reduce((accumulator, currentElement) => accumulator + currentElement, 10) //25
