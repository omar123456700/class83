
var lastposition_x , lastposition_y;
canvas=document.getElementById("canvas1");
ctx=canvas.getContext("2d");
color="aqua";
width_of_line=1;
var width = screen.width; 
new_width = screen.width - 70; 
new_height = screen.height - 300;
if(width<992)
{
document.getElementById("canvas1").width = new_width;
 document.getElementById("canvas1").height = new_height;
  document.body.style.overflow = "hidden";
}
canvas.addEventListener("touchstart", my_touchstart);
function my_touchstart(e){
color = document.getElementById("color").value;
width_of_line = document.getElementById("width_of_line").value;
lastposition_x = e.touches[0].clientX - canvas.offsetLeft;
lastposition_y = e.touches[0].clientY - canvas.offsetTop;
}
canvas.addEventListener("touchmove", my_touchmove);
function my_touchmove(e)
{
currentmouse_x = e.touches[0].clientX - canvas.offsetLeft;
currentmouse_y = e.touches[0].clientY - canvas.offsetTop;
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = width_of_line;
console.log("Last position of x and y coordinates = ");
console.log("x = " + lastposition_x + "y = " + lastposition_y);
ctx.moveTo(lastposition_x, lastposition_y); 
console.log("Current position of x and y coordinates = ");
console.log("x = " + currentmouse_x + "y = " + currentmouse_y);
 ctx.lineTo(currentmouse_x, currentmouse_y);
 ctx.stroke(); 
lastposition_x=currentmouse_x;
lastposition_y=currentmouse_y;
}
function clear1()
{
    console.log("enteredtoclear")
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}
