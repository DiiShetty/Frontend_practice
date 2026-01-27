           // ADD ELEMENTS TO A LIST

const list1 = document.createElement("li");
list1.textContent="Maggie";
const list2= document.createElement("li");
list2.textContent="Noodles";
const list3= document.createElement("li");
list3.textContent="chowmein";
const list4= document.createElement("li");
list4.textContent="panneer";

const underorderElement = document.getElementById("listing");
underorderElement.append(list1);
underorderElement.append(list2);
// underorderElement.append(list1,list2);   //valid


underorderElement.prepend(list3);   // adds at the beginning

// list1.after(list4);     // insert in between
    // if we dont hv direct access then

underorderElement.children[1].after(list4);







// const newElement = document.createElement("h5");
// newElement.textContent = "-------------------------------------------------------------";
// newElement.id="line";

console.log(newElement)





            // NOT A GOOD METHOD
const arr = ["maggie","noodles","chowmein","panneer"];
const underorderElement2 = document.getElementById("listing");

for(let food of arr){
    const list = document.createElement("li");
    list.textContent=food;
    underorderElement2.append(list);
}







//          FRAGMENT

// START THE TIMER
console.time("Loop WITH fragment");

// 1. Create the invisible "scratchpad".
const fragment = document.createDocumentFragment();

// 2. Do all your work on the scratchpad.
//    This loop is now very fast because it's only changing things in memory,
//    not on the visible page.

for (let i = 0; i < 1000; i++) {
  const newItem = document.createElement("li");
  newItem.textContent = `Item ${i + 1}`;

  // We append to the fragment, not the live list.
  fragment.appendChild(newItem);
}

// 3. Now, attach the entire finished result to the live DOM in ONE single operation.
underorderElement.appendChild(fragment); // This causes only ONE reflow and repaint!

// STOP THE TIMER
console.timeEnd("Loop WITH fragment");










const month = document.getElementById("ten");
console.log(month);
console.log(month.children);
// console.log(month.childNodes);





        // old methods (no need)

const lister = document.createElement("ten");
lister.textContent = "kfvhb";

month.insertAdjacentElement("beforebegin",lister);
month.insertAdjacentElement("afterend",lister);
// sameas month.append/prepend 