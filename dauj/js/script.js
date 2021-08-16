let stepbl1 = document.getElementById("stepbl1");
let stpbrdr1 = document.getElementById("stepbrdr1 ");

let stepbl2 = document.getElementById("stepbl2");
let stpbrdr2 = document.getElementById("stepbrdr2 ");

let stepbl3 = document.getElementById("stepbl3");
let stpbrdr3 = document.getElementById("stepbrdr3 ");

stepbl1.onmouseover = function() {
   stepbrdr1.style.borderBottom = "3px solid white";   
}
stepbl1.onmouseout = function() {
   stepbrdr1.style.borderBottom = "3px solid black";   
}

stepbl2.onmouseover = function() {
   stepbrdr2.style.borderBottom = "3px solid white";   
}
stepbl2.onmouseout = function() {
   stepbrdr2.style.borderBottom = "3px solid black";   
}

stepbl3.onmouseover = function() {
   stepbrdr3.style.borderBottom = "3px solid white";   
}
stepbl3.onmouseout = function() {
   stepbrdr3.style.borderBottom = "3px solid black";   
}