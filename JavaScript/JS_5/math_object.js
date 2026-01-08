
console.log(Math.abs(-4));
console.log(Math.PI);
console.log(Math.LOG10E);
console.log(Math.SQRT2);
console.log(Math.ceil(2.1))     //upper val
console.log(Math.floor(2.6))    //lower val
console.log(Math.log10(20));
console.log(Math.max(12,32,12,45,65,74,34,89));


//RANDOM
console.log(Math.random());
// generate values from 0-1 whre 0 is included but 1 is not included


//GENERATING RANDM NUM FROM 0-9
console.log(Math.floor(Math.random()*10)); 
                         //ceil-->X increases the val

//GENERATING RANDM NUM FROM 1-10  
console.log(Math.floor(Math.random()*10)+1);   

//GENERATING RANDM NUM FROM 1-6
  console.log(Math.floor(Math.random()*6)); 

for(let i=0;i<6;i++){
    console.log(Math.floor(Math.random()*6)); 
}

//DICE ROLL GAME
console.log(Math.floor(Math.random()*7)); 

            //math.random * Total_num_of_outcome

            //15-16 --> no.of outcome=11+15(shift to 15)
console.log(Math.floor(Math.random()*11)+15); 


    //FORMULA
    //Math.floor(Math.random()*(max-min-1))+min


    
 // OTP GENERATE: (1000-9999)
 console.log(Math.floor(Math.random()*8998)+1000);
