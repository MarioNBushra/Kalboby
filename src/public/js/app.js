console.log("Welcome to script");


const natured_yes = document.getElementById("yes")
const natured_no = document.getElementById("no")
const natured_date = document.getElementById("natured_date")
let regDate = document.getElementById("regDate")

//vaccine
const rabiesCheck = document.getElementById("rabies") 
const combinedCheck = document.getElementById("combined") 
const dewormingCheck = document.getElementById("deworming") 

const rabiesDate = document.getElementById("rabiesDate") 
const combinedDate = document.getElementById("combinedDate") 
const dewormingDate = document.getElementById("dewormingDate") 





var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
regDate.value = date

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


const rabiesChecked = () => {
    
    if(rabiesCheck.checked === true){
        console.log("Rabies Checked");
        rabiesDate.hidden = false
    }else{
        rabiesDate.hidden = true
    }
    // }if(combinedCheck === true){
    //     console.log("combined checked");
    //     combinedDate.hidden = false
    // } if(dewormingCheck === true){
    //     dewormingDate.hidden = false
    // }else{
    //     console.log("Ma4y");
    // }
}

const combinedChecked = () => {
    
    // if(rabiesCheck.checked === true){
    //     console.log("Rabies Checked");
    //     rabiesDate.hidden = false
    // }
    if(combinedCheck.checked === true){
        console.log("combined checked");
        combinedDate.hidden = false
    }else{
        combinedDate.hidden = true
  
    }
    // if(dewormingCheck === true){
    //     dewormingDate.hidden = false
    // }else{
    //     console.log("Ma4y");
    // }
}

const dewormingChecked = () => {
    
    // if(rabiesCheck.checked === true){
    //     console.log("Rabies Checked");
    //     rabiesDate.hidden = false
    // }
    // if(combinedCheck === true){
    //     console.log("combined checked");
    //     combinedDate.hidden = false
    // } 
    if(dewormingCheck.checked === true){
        dewormingDate.hidden = false
    }else{
        dewormingDate.hidden = true
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
