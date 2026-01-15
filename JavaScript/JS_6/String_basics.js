//         // MULTIPLE WAYS
const str1="Rohit";
const str2='Rohit';
const str4='sam';

const str3=`Good 
morning
how
are you
`;  
          //  modern way


const str5=`my name is ${str4}`;

console.log(str1,str2,str3,str5);

const s1=`How are you`;
console.log(str1.length);
console.log(s1[2]);
str2[2]='p';
console.log(s1);    //not possinle STRING->IMMUTABLE



console.log(s1.toUpperCase());  //UPPERCASE
console.log(s1.toLowerCase());    //LOWERCASE
console.log(s1);    //doesnt change the original string
                   // creates a new string



//            //FINDING SUBSTRING
const s2=`How Are You , How is it going`;  
console.log(s2.indexOf('Are'));                      
console.log(s2.indexOf('y'));   //-1
                            //normally everything is converted to uppercase to prevent such problems

console.log(s2.lastIndexOf('How'));

console.log(s2.includes('you'));



               // slicing strings
console.log(s2.slice(3,7));  
console.log(s2.slice(5));  //removes all elements from index 0-5  

console.log(s2.slice(-4));  //n to -4 removes all remaining elements
                // -4 -3 -2 -1 n (from last)
console.log(s2.slice(-8,-4));                



//              // SUBSTRING METHOD
console.log(s2.substring(5,9));
                    //DOESNT ALLOW -VE INDEX MARKING

    

             // CONCATENATING STRING
const a="Sam";
const b="cole";
console.log(a+" "+b);
//              // WITH NUMBERS
console.log(24+"Sam");  //24Sam


                 // REPLACE
console.log(s2.replace("Are You","R U"));
console.log(s2.replace("How","Hw"));
console.log(s2.replaceAll("How","Hw"));
                        //creates a new string
                        //doesnt modify th eoriginal one

                        
                 // TRIM
const s3="  Ram  ";
console.log(s3);
console.log(s3.trim());  


//               // SPLIT
const names="Sam,Ram,Sham,Bham";
console.log(names.split(","));  //returns an array

const names2="Sam-Ram-Sham-Bham";
console.log(names2.split("-"));

const names3="Sam Ram Sham Bham";
console.log(names3.split(" "));