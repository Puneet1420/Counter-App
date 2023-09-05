let increment = document.querySelector("#in");
let decrement = document.querySelector("#de");
let reset = document.querySelector("#reset");
let targetvalue = document.querySelector("span");
let value = 0;



increment.addEventListener("click",function(){
    value += 1;
    targetvalue.innerHTML = value;
});
decrement.addEventListener("click",function(){
    if (value > 0) {
        value -= 1;
        targetvalue.innerHTML = value;
    }else{
        alert("Value cannot Be Less Than 0");
    }
    
});
reset.addEventListener("click",function(){
    value = 0;
    targetvalue.innerHTML = value;
});
//

//mouse enter event Listener

targetvalue.addEventListener("mouseenter",function(){
    alert("Hello Dear");
});
// dounle click event listener

function createCircle(x, y) {
    const circle = document.createElement("div");
    circle.className = "circle";
    circle.style.left = `${x - 25}px`;
    circle.style.top = `${y - 25}px`;
    document.body.appendChild(circle);

    //remove
  setTimeout(function(){
    document.body.removeChild(circle);
  },1000);
  }
  
  // Double-click event handler
  document.addEventListener("click", function (event) {
    createCircle(event.clientX, event.clientY);
  });


