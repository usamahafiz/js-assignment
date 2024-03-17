// clear button
document.getElementById("clearStatementButton1").onclick= function(){
    document.getElementById("hero").innerHTML=" ";
   
}

document.getElementById("clearStatementButton2").onclick= function(){
    document.getElementById("output").innerHTML=" ";
   
}

//  1 button
let fullName = "Muhammad Rayyan";
document.getElementById("alertString").onclick = function () {
    let name = alert(fullName);
    //console.log(name)
    //document.getElementById("statement").innerHTML=name;
    document.getElementById("hero").innerHTML = fullName;
}

//  2 button

let number = 23456789;
    document.getElementById("alertNumber").onclick = function () {
        document.getElementById("output").innerHTML = " "
        document.getElementById("hero").innerHTML = " "
    let name = alert(number);
    document.getElementById("hero").innerHTML = number;
}
// CamelCaseExamples
document.getElementById("ShowCamelCaseExamples").onclick = function () {
    document.getElementById("hero").innerHTML = " ";
    document.getElementById("output").innerHTML = `
        <ul>
            <li>user</li>
            <li>userTime</li>
            <li>userTimeLimit</li>
        </ul>`;
}


// sum
let num1=10;
let num2=5;
let sum;
sum=num1+num2
document.getElementById("Sum2Number").onclick= function () {

    document.getElementById("hero").innerHTML = " "
    document.getElementById("output").innerHTML = " "

    //  document.getElementById("hero").innerHTML =  
    // "num1=10"+
    //  "num2=5"+
    // "sum=num1+num2"


    document.getElementById("hero").innerHTML = 
    "num1 = " +num1+
   "<br>num2 = "+num2+
    "<br>sum = num1 + num2";
 document.getElementById("output").innerHTML =  "<p class='text-center'>"+ sum + "</p>";

}

// subtract
subtract=num1-num2
document.getElementById("Subtract2Number").onclick= function () {

    document.getElementById("hero").innerHTML = " "
    document.getElementById("output").innerHTML = " "

    //  document.getElementById("hero").innerHTML =  
    // "num1=10"+
    //  "num2=5"+
    // "subtract=num1-num2"

    document.getElementById("hero").innerHTML = 
    "num1 = " +num1+
    "<br>num2 = "+num2+
    "<br>subtract = num1 - num2";
    document.getElementById("output").innerHTML =  "<p class='text-center'>"+ subtract + "</p>";

}

// multiply

multiply=num1*num2
document.getElementById("Multiply2Number").onclick= function () {

    document.getElementById("hero").innerHTML = " "
    document.getElementById("output").innerHTML = " "

     document.getElementById("hero").innerHTML =  
     "num1 = " +num1+
    "<br>num2 = "+num2+
    "<br>multiply=num1*num2"


document.getElementById("output").innerHTML =  "<p class='text-center'>"+ multiply + "</p>";

}


// division


division=num1/num2
document.getElementById("Divide2Number").onclick= function () {

    document.getElementById("hero").innerHTML = " "
    document.getElementById("output").innerHTML = " "

     document.getElementById("hero").innerHTML =  
     "num1 = " +num1+
    "<br>num2 = "+num2+
    "<br>division=num1/num2"


// subtract=num1-num2

document.getElementById("output").innerHTML =  "<p class='text-center'>"+ division + "</p>";

}

// last button

document.getElementById("CalaculateSomeNumber").onclick= function(){

    document.getElementById("hero").innerHTML = " "
    document.getElementById("output").innerHTML = " "

    let calculation= 36/6*3+2**4-(3+5)

    document.getElementById("hero").innerHTML = " 36/6*3+2**4-(3+5) "
    document.getElementById("output").innerHTML =  "<p class='text-center'>"+ calculation + "</p>"
}
document.getElementById("ShowVariableName").onclick= function(){
    document.getElementById("output").innerHTML = `<ul>
    <li><strong>Declaration Keywords:</strong> Variables in JavaScript can be declared using three keywords: <code>var</code>, <code>let</code>, and <code>const</code>.</li>
    <li><strong>var Keyword:</strong> The <code>var</code> keyword is the oldest way to declare variables in JavaScript. It has function scope and is subject to hoisting.</li>
    <li><strong>let Keyword:</strong> Introduced in ES6, <code>let</code> allows block-scoped variable declaration and is not hoisted.</li>
    <li><strong>const Keyword:</strong> Also introduced in ES6, <code>const</code> allows the declaration of variables whose values are constant and cannot be reassigned.</li>
    <li><strong>Hoisting:</strong> Variable declarations in JavaScript are hoisted to the top of their scope during execution.</li>

  </ul>`
}