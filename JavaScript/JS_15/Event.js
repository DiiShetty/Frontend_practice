// EVENT : MOUSE MOVE, CLICK. DOUBLE
// EVENT LISTENER : LISTENEING THE EVENT (CLICK)
// EVENT ACTION : CHANGES DONE 

        // CHANGE AFTER CLICK

        // 1]
// function handleclick(){
//     const element = document.getElementById("first");
//     element.textContent="Come back";
// }

                // NOT SUITABLE AS JS FUNCTN IS WRITTEN IN HTML


        // 2]
// const element = document.getElementById("first");
// element.onclick = function handleclick(){
//     element.textContent = "come back";
// }

// element.onclick = function handleclick(){
//     element.textContent = "I am the best";
// }
            // NOT SUITABLE AS IT CAN BE OVERRIDED VERY EASILY 
            // BEACUSE THEY ARE OBJECT (ELEMENTS IN THE OBJECT GET OVERRIDED)



        // 3]
const element = document.getElementById("first");


element. addEventListener('click',()=>{
    element.textContent = "Come back";
})   

element.addEventListener('click',()=>{
    element.style.backgroundColor="pink";
})
            // NOT OVERRIDED BOTH ARE APPLIED


// DOUBLE CLICK
element.addEventListener('dblclick',()=>{
    element.style.backgroundColor="blue";
})

// MOUSE ENTER
element.addEventListener('mouseenter',()=>{
    element.style.backgroundColor="orange";
})

// MOUSE LEAVE
element.addEventListener('mouseleave',()=>{
    element.textContent="Welcome";
})
            



