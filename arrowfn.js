// in this we use this keyword

// const user = {
//     username:"abhi",
//     price:999,
//     welcomeMessage:function(){
//         console.log(`${this.username} ,welcome to website`);
//         console.log(this)  //show curent context
//     }


// }

//  user.welcomeMessage()

// user.username = "aman"
//  user.welcomeMessage()

//  console.log(this)

//  function chai(){
//     let username ="amanakumar"
//     console.log(this.username) this can only used in object
//  }
//  chai()

// _____________ARROWfunction____________

// const chai =()=>{
//     let username = "amankuamr"
//     console.log(this)
// }
// chai()

// const addTwo = (num1,num2) => {
// return num1+num2
// }
// console.log(addTwo(2,3))

// const addTwo = (num1,num2) => (num1+num2)

// const addTwo = (num1,num2) => ({username:"abhimanyu"})

    
//     console.log(addTwo(2,3))


// another method to invoked immediately/
     
// (function chai (){
//     console.log(`DB CONNECTED`);
// })();
// (function chai (){
//     console.log(`DB CONNECTED ho gya`);
// })();

// ((name)=>{
//     console.log (`DB connected ${name}`);
// })('aman');
 
f