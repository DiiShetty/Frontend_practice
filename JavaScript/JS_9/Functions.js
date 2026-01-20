          
          // function

            // FUNCTN DECLARATION (WAY - 1)
function greeting(){
    console.log("Hello how are u");
}
greeting();


function add(n1,n2){
    const sum=n1+n2;
    console.log(sum);
}
add(7,8);


console.log(greeting());    // => undefined
                // BCZ greeting() DEOSNT RETURN ANYTHING

function addNum(n1,n2){
    return n1+n2;
    
}   
console.log(addNum(4,5));      



            // DEFUALT VALUES
function addN(n1,n2,n3=0,n4=0){
    return n1+n2+n3+n4;
}    

console.log(addN(5,6));
                        // defualt values (if n3,n4 isnt given) then = 0 


                        

                     
                        // REST OPERATOR
                // (N number of parameters)
                
function addition(...n){
    let sum=0;
    for(let i of n){
        sum+=i;
    }
    console.log(sum);
}                        
addition(5,3,6,40);
addition(45,65,48,8,5,2,6);
addition(4,5);

                        // DIFF BTW REST AND SPREAD OPERATOR


 
                        
        // FUNCN EXPRESSION (WAY - 2)
const addd = function(n1,n2){
    return n1+n2;
} 
console.log(addd(8,6));  



//  2 WAYS
            // FUNCTN CALL BEFORE FUNCTN (ALLOWED)
// greeting();

// function greeting(){
//     console.log("Hello how are u");
// }



        // FUNCTN CALL BEFORE FUNCTN (NOT ALLOWED X)
// console.log(addd(8,6)); 

// const addd = function(n1,n2){
//     return n1+n2;
// } 




                // ARROW FUNCTN
const adddd = (n1,n2)=>{
    return n1+n2;
}  

console.log(adddd(9,6));  

        // IF ONLY 1 VALUE IS RETURNED
const add2 = (n1,n2) => n1+n2;

console.log(add2(54,54));        


        // square
const square = num => num*num;

console.log(square(9));



        // retuen object in functn
const greeting2 = ()=> ({name:"Sam",age:45});
                // IMMEDITELY RETURN WHATS INDIE ();

console.log(greeting2());






            // IIFE (IMMEDITELY INVOKE FUNCTN)
(function greet(){
    console.log("Hello");
}) ();  






                     // CALLBACK

function greet(){
    console.log("hello");
}  
function cheer(callback){
    console.log("HUrray!!");    //executes this
    callback();                 // then calls grret()
} 

cheer(greet);




function greet2(){
    console.log("hello how r u");
}  
function cheer2(callback){
    console.log("hip hip HUrray!!");
    callback();
} 





// // example

function ZomatoOrderPlaced(){
    console.log("We have started preparing your food");
}

function payment(amount){
    console.log(`${amount} payment has initialized`);
    console.log("Payment is recieved");
    ZomatoOrderPlaced();
}

payment(500);




// IF BLINKIT IS MERGED TO THIS THEN

function ZomatoOrderPlaced2(){
    console.log("We have started preparing your food");
}

function BlinkitOrderPlaced(){
    console.log("We have started to pack your order");
}


function payment2(amount,callback){
    console.log(`${amount} payment has initialized`);
    console.log("Payment is recieved");
    callback();     //no need to mention which funtn to call again
}

// payment2(899,ZomatoOrderPlaced2);
payment2(45,BlinkitOrderPlaced);