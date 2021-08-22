let main=document.getElementById("main")

let counter=document.createElement("h1")
counter.innerHTML= 0;

let increment1=document.createElement("button")
increment1.setAttribute("onclick","increment()")
increment1.innerText= "increment";

let decrementbt=document.createElement("button")
decrementbt.setAttribute("onclick","decrement()")
decrementbt.innerText= "decrement";

let resetbt=document.createElement("button")
resetbt.setAttribute("onclick","reset()")
resetbt.innerText= "reset";

main.appendChild(counter);
main.appendChild(increment1);
main.appendChild(decrementbt);
main.appendChild(resetbt);

function increment(){
    let currentCount=counter.innerText;
    let updatedCount=parseInt(currentCount) + 1
    counter.innerHTML=updatedCount;
}

function decrement(){
    let currentCount=counter.innerText;
    let updatedCount=parseInt(currentCount) - 1
    counter.innerHTML=updatedCount;
}

function reset(){
    counter.innerHTML = 0;
}