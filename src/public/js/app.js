console.log("Welcome to script");


const natured_yes = document.getElementById("yes")
const natured_no = document.getElementById("no")
const natured_date = document.getElementById("natured_date")
let regDatee = document.getElementById("regDate")

//vaccine
const rabiesCheck = document.getElementById("rabies") 
const combinedCheck = document.getElementById("combined") 
const dewormingCheck = document.getElementById("deworming") 

const rabiesDatee = document.getElementById("rabiesDate") 
const combinedDatee = document.getElementById("combinedDate") 
const dewormingDatee = document.getElementById("dewormingDate") 







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

