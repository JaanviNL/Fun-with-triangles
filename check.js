var one = document.querySelector("#one");
var two = document.querySelector("#two");
var three = document.querySelector("#three");

var button = document.querySelector("#button");
var message = document.querySelector(".msg-right");


function isTriangle()
{
 var sum = Number(one.value)+ Number(two.value) + Number(three.value);
 
 if (sum === 180) {
    message.innerText = "Yay, the angles form a triangle!";
  } else {
    message.innerText = "Oh Oh! The angle doesn't form a triangle";
  }
}

button.addEventListener("click", isTriangle);
