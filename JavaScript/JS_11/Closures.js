
//                 // SCOPE

// //SCOPE =>     1. GLOBAL (ACCSESSIBLE TO EVRYONE)
//             // 2. FUNCTIONAL (ACCESSIBLE ONLY TO THT FUNCTN)
//             // 3.BLOCK LEVEL (ACCESSIBLE ONLY TO THT BLOCK) 

//                     // --> VALID ONLY FOR (let, const) not for (var)
//                     // var => doesnt respect block level scope
//     // global           
let a=10;
const b=90;


// //     // block level
if(true){
    let d=30;
    console.log(d);
    var j=57;
}    
// console.log(d);  // => X
// console.log(j); // => works


// //     // functional
function greet(){
    let c=79;
    console.log(c);
}
greet();






// //  1]
function createCounter(){
    function increment(){
        console.log("I am increment function");
        
    }

    increment();
}

// // createCounter();    // => I am increment function

// // //  2]
function createCounter(){
    function increment(){
        console.log("I am increment function");
        
    }

    return increment;
}

const count =createCounter();
console.log(count); // => [Function: increment]


// //  3]
function createCounter(){
    function increment(){
        console.log("I am increment function");
        
    }

    return increment();
}

const count2 =createCounter();
console.log(count2);    // => I am increment function
// //                         //    undefined







// //                 // CLOSURE
// // // Closure = A function that remembers variables from its outer scope even after the outer function has finished executing.

function createCounter() {
    let count = 0;  // Private variable

    return function() {
        count++;  // Accesses outer variable
        return count;
    };
}

const counter = createCounter();

console.log(counter());  // 1
console.log(counter());  // 2
 console.log(counter());  // 3


// // What’s happening step-by-step
// // outer() runs and creates count
// // inner() uses count
// // outer() returns inner
// // Even though outer() is done, inner() still remembers count
// // That memory = closure

// // // "count" is NEVER directly accessible!
// // // console.log(count);  // ❌ ReferenceError




//          // EXAMPLE - 1
function secret() {
  let password = "1234";

  return function() {
    return "Access denied";
  };
}

const check = secret();
console.log(check());
// console.log(password); // ❌ Error




//          // EXAMPLE -2
function secret() {
  let password = "1234";

  return function(input) {
    if (input === password) {
      return "Access granted";
    } else {
      return "Access denied";
    }
  };
}

const checkk = secret();

console.log(checkk("1234")); // Access granted
console.log(checkk("0000")); // Access denied

// password is hidden
// Only the inner function can access it
// That memory of password = closure


//          // OTHER EXAMPLES

// // let user = {
// //     balance:899,
// //     deposit: function(amount){
// //         if(typeof amount==="number" && amount>0){
// //             this.balance+=amount;
// //             return this.balance;
// //         }
// //     },
// //     withdraw: function(amount){
// //         if(typeof amount=="number" && amount>0 && this.balance>=amount){
// //             this.balance-=amount;
// //             return this.balance;
// //         }
// //     }
// // }
// // // user.deposit(60);
// // // console.log(user);
// // console.log(user.deposit(90));
// // console.log(user.withdraw(78));

// // // ❌ ❌ ❌ ❌  
// // // THIS HAD DIRECT ACCESS TO THE AMOUNT IF MADE MANY MISTAKES LIKE
// // //=> can lead to problems     \




function createBankAccount() {
    let user = {
        balance: 899,
        deposit: function (amount) {
            if (typeof amount === "number" && amount > 0) {
                this.balance += amount;
                return this.balance;
            }
        },
        withdraw: function (amount) {
            if (typeof amount === "number" && amount > 0 && this.balance >= amount) {
                this.balance -= amount;
                return this.balance;
            }
        }
    };

    return user; 
}

const customer = createBankAccount();
console.log(customer.deposit(78)); // 977









// //                 // HIGHER ORDER FUNCTN

// //  const numbers = [1, 2, 3, 4, 5];

// // // map is a higher-order function// It takes a function as an argument
// // const doubled = numbers.map(function(num) {
// //   return num * 2;
// // });

// // console.log(doubled);      


// // function doubled(value){
// //     return function execute(num){
// //         return num*value;
// //     }
// // }
// // const n = double(90)(90);
// // console.log(n);