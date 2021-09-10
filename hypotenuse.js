var one = document.querySelector("#one");
var two = document.querySelector("#two");


var button = document.querySelector("#button");
var message = document.querySelector(".msg-right");


function checkHypo()
{
 var sumOfSquares = Number(one.value) * Number(one.value) + Number(two.value) * Number(two.value) ;
 const lengthOfHypotenuse = Math.sqrt(sumOfSquares);
 message.innerText = "The length of hypotenuse(c) is: " + lengthOfHypotenuse;
}

button.addEventListener("click", checkHypo);
