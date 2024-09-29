// Object.create


              //* object literal
 const mysym = Symbol("key1")
const Jsuser = {
    name : "abhimanyu",
    "full name":"Abhimanyu Kumar",
   [mysym]:"mykey1",
    age :20,
    location : "gurgaon",
    isLoggedIn :false,
    lastLoginDays:["monday", "Saturday"]
}
// console.log(Jsuser.name) // dot method

// console.log( Jsuser["name"]) //another method

// // console.log(Jsuser."full name") wrong 

// console.log(Jsuser["full name"]) // corr ect method
// console.log(typeof Jsuser[mysym])

// Jsuser.age = 25
// Object.freeze(Jsuser)
// Jsuser.age = ("hery")

// console.log(Jsuser)
Jsuser.greetingTwo = function (){
    console.log(`hello js userr, ${this.name},${this.age}`)
}
Jsuser.greeting = function (){
    console.log("hello js user")
}
console.log(Jsuser.greeting())
console.log(Jsuser.greetingTwo())