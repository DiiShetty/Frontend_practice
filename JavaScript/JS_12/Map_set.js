const products = [
  // Electronics
  { id: 1, name: "Laptop", category: "Electronics", price: 1200, inStock: true },
  { id: 2, name: "Headphones", category: "Electronics", price: 200, inStock: true },
  { id: 3, name: "Smartphone", category: "Electronics", price: 800, inStock: false },
  { id: 4, name: "Monitor", category: "Electronics", price: 300, inStock: true },
  { id: 5, name: "Keyboard", category: "Electronics", price: 75, inStock: true },

  // Books
  { id: 6, name: "The Hobbit", category: "Books", price: 25, inStock: true },
  { id: 7, name: "A Brief History of Time", category: "Books", price: 30, inStock: true },
  { id: 8, name: "Dune", category: "Books", price: 28, inStock: false },

  // Appliances
  { id: 9, name: "Coffee Maker", category: "Appliances", price: 150, inStock: false },
  { id: 10, name: "Blender", category: "Appliances", price: 80, inStock: true },
  { id: 11, name: "Toaster", category: "Appliances", price: 45, inStock: true },
  { id: 12, name: "Microwave Oven", category: "Appliances", price: 220, inStock: true },

  // Clothing
  { id: 13, name: "T-Shirt", category: "Clothing", price: 20, inStock: true },
  { id: 14, name: "Jeans", category: "Clothing", price: 60, inStock: false },
  { id: 15, name: "Jacket", category: "Clothing", price: 110, inStock: true },

  // Home Goods
  { id: 16, name: "Desk Lamp", category: "Home Goods", price: 35, inStock: true },
  { id: 17, name: "Scented Candle", category: "Home Goods", price: 15, inStock: true },
  { id: 18, name: "Picture Frame", category: "Home Goods", price: 22, inStock: false },

  // Groceries
  { id: 19, name: "Organic Apples", category: "Groceries", price: 5, inStock: true },
  { id: 20, name: "Artisan Bread", category: "Groceries", price: 8, inStock: true }
];


     // FILTERING N SORTING DATA
const newProd = products.filter((products)=>products.price>50);
console.log(newProd)

const newProd2 = products.filter((products)=>products.price>50).sort((a,b)=>b.price-a.price);
console.log(newProd)        // sort on price basis



     //TRANSFORMING DATA
const ans = products.map((products)=> ({name:products.name, price:products.price}));
console.log(ans);

const ids = products.map((products)=> ({id:products.id}));
console.log(ids);




//          // REDUCE

//  //use case -> sum of all
const totalprice = products.reduce((accumulator,currentValue)=>{
    return accumulator+currentValue.price;
},0);
console.log(totalprice);


// with conditn
const inStockprice = products.reduce((accumulator,currentValue)=>{
    if(currentValue.inStock)
        return accumulator+currentValue.price;
    else
        return accumulator;
},0);
console.log(inStockprice);



//          //SET
//      //NO DUPLICATES ALLOWED

const arr = [8,3,6,3,4,2,6,8];
console.log(arr);

const s1 = new Set(arr);
console.log(s1);    // ONLY UNIQUE VALUES

s1.add(10);
console.log(s1);

console.log(s1.has(3));
console.log(s1.has(67));

console.log(s1.delete(10)); console.log(s1);
console.log(s1.size);

s1.clear();
console.log(s1);



//      REAL USE CASE
const email = ["A@gm","B@gm","P@gma","B@gm"];   // email->unique
const s2=new Set(email)
console.log(s2);    // { 'A@gm', 'B@gm', 'P@gma' }
            // IF ARRAY FROM IS REQUIRED

const uniqueEmail = [...new Set(email)];
console.log(uniqueEmail);           


//      // TRAVERSING IN SET
for(let num of s2){
    console.log(num);
}



//          MAP
const m1 = new Map([
    ["Sam",67],
    [9,87],
    [true,13],
    [[78,34,56],"Ram"]
])
console.log(m1);        //{ 'Sam' => 67, 9 => 87, true => 13, [ 78, 34, 56 ] => 'Ram' }


// add val
m1.set({name:"mainish",age:78},false);
m1.set("Bam",97);
console.log(m1);

console.log(m1.has("Sam"));

console.log(m1.get(true));


console.log(m1.delete("Bam"));
console.log(m1);

console.log(m1.size);

// traverse
for(let [keys,value] of  m1){
    console.log(keys,value);
}
m1.clear();
console.log(m1);




