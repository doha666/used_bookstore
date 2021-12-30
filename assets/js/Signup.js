var x = document.getElementById("login");
var y= document.getElementById("regester");
var z= document.getElementById("btn");


function regester(){
    y.style.visibility="visible";
    x.style.visibility="hidden";
    x.style.left="-600px";
    y.style.left="0px";
    z.style.left="110px";
   x.style.position="absolute";
   y.style.position="relative";
    
}
function login(){
    x.style.visibility="visible";
    y.style.visibility="hidden";
    x.style.left="0px";
    y.style.left="-1850px";
 
    
    z.style.left="0px";
    
    y.style.position="absolute";
    x.style.position="relative";
    
}
   