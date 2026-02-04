const form = document.querySelector('form');

const boy = document.getElementById("Boy");
const girl = document.getElementById("Girl");

form.addEventListener('submit',(e)=>{
    e.preventDefault();     // 
    

    const l1 = boy.value.length;
    const l2 = girl.value.length;

    const result =  Math.pow(l1+l2,3)%101;  //random

    document.querySelector('h2').textContent = `Result : ${result}%`;

    form.reset();
})


// without preventDefault()
    // Result:
    // Page reloads immediately
    // Your Result : xx% will flash or never show


// With e.preventDefault()    
    // Result:
    // Page does NOT reload
    // JS takes full control
    // You can calculate, validate, show results