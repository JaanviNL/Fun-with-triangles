var one = document.querySelector("#one");
var two = document.querySelector("#two");


var button = document.querySelector("#button");
var message = document.querySelector(".msg-right");


function CalculateArea()
{
 var Multiply = Number(one.value) * Number(two.value)  ;
 const Area= Multiply/2;
 message.innerText = "Area of Triangle is : " + Area + " units";
}

button.addEventListener("click", CalculateArea);
