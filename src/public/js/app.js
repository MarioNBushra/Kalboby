console.log("Welcome to script");


const natured_yes = document.getElementById("yes")
const natured_no = document.getElementById("no")

const natured_date = document.getElementById("natured_date")

console.log(natured_yes.checked);

const checked = () => {
    console.log("Welcome from fn");
    if(natured_yes.checked === true){
        console.log("Checked");
        natured_date.removeAttribute("hidden")
    }    
}


const unChecked = () => {
    console.log("Welcome from fn");
    
    if(natured_no.checked === true){
        console.log("UNChecked");
        natured_date.hidden = true
    }
    
    
}


















// console.log("Welcome from app.js");
// var mousedownonelement = false;
// window.getlocalmousecoord = function (svg, evt) {
//   var pt = svg.createSVGPoint();
//   console.log(pt);
//   pt.x = evt.clientX;
//   pt.y = evt.clientY;
//   var localpoint = pt.matrixTransform(svg.getScreenCTM().inverse());
//   localpoint.x = Math.round(localpoint.x);
//   localpoint.y = Math.round(localpoint.y);
//   return localpoint;
// };
// window.createtext = function (localpoint, svg) {
//   var myforeign = document.createElementNS(
//     "http://www.w3.org/2000/svg",
//     "foreignObject"
//   );
//   var textdiv = document.createElement("div");
//   var textnode = document.createTextNode("Click to edit");
//   textdiv.appendChild(textnode);
//   textdiv.setAttribute("contentEditable", "true");
//   textdiv.setAttribute("width", "auto");
//   myforeign.setAttribute("width", "100%");
//   myforeign.setAttribute("height", "100%");
//   myforeign.classList.add("foreign"); //to make div fit text
//   textdiv.classList.add("insideforeign"); //to make div fit text
//   textdiv.addEventListener("mousedown", elementMousedown, false);
//   myforeign.setAttributeNS(
//     null,
//     "transform",
//     "translate(" + localpoint.x + " " + localpoint.y + ")"
//   );
//   svg.appendChild(myforeign);
//   myforeign.appendChild(textdiv);
// };

// function elementMousedown(evt) {
//   mousedownonelement = true;
// }
// $("#HalaSvg").click(function (evt) {
//   var svg = document.getElementById("thesvg");
//   var localpoint = getlocalmousecoord(svg, evt);
//   if (!mousedownonelement) {
//     createtext(localpoint, svg);
//   } else {
//     mousedownonelement = false;
//   }
// });
