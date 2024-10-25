function calc (){

let number1 = Number(document.getElementById("number1").value);
let number2 = Number(document.getElementById("number2").value);
let op = (document.getElementById("operater").value);
let output = document.getElementById("print");

let sum =0;

if( op == "+"){
    sum = number1 + number2;
     
 }
 else if(op == "-"){
     sum = number1 - number2;
     
  }
  else if(op == "*"){
     sum = number1 * number2;
    
 }
 else if(op == "/"){
     sum = number1 / number2;
    
 }
 else if(op == "%"){
     sum = number1 % number2;
    
}
console.log(sum);


output.innerHTML=(sum); 


}



function calc1(){

let displaytext =  document.getElementById("displaytext").value;
let output2= document.getElementById("out");
let sum = eval(displaytext);
output2.innerHTML=(sum);
// alert(sum);



}


