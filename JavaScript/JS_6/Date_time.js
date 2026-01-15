
//              //CURRENT TIME //
const now= new Date();
console.log(now);   //UTC (universsl) format time

console.log(now.toString());    //my time
console.log(now.toISOString()); //utc format
console.log(now.toLocaleString());
console.log(now.toLocaleDateString());  //date

console.log(now.getDate());
console.log(now.getDay());
console.log(now.getFullYear());
console.log(now.getHours());
console.log(now.getMonth());    //starts from 0
                                // Jan = 0
console.log(now.getMinutes());  
console.log(now.getSeconds());    


const noww = new Date(2026,1,12,16,8,45);
console.log(noww);      // returns time in utc format only
                        //not the provided one
                        //month also not consistent

        //TIME STAMP
const nov=Date.now();
const dates = new Date(632054532);
console.log(dates);