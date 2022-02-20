console.log("Welcome to script");


const natured_yes = document.getElementById("yes")
const natured_no = document.getElementById("no")
const natured_date = document.getElementById("natured_date")

//vaccine
const rabiesCheck = document.getElementById("rabies") 
const combinedCheck = document.getElementById("combined") 
const dewormingCheck = document.getElementById("deworming") 

const rabiesDatee = document.getElementById("rabiesDate") 
const combinedDatee = document.getElementById("combinedDate") 
const dewormingDatee = document.getElementById("dewormingDate") 





// natured_yes.checked ? console.log("yes") : false
// natured_no.checked ? natured_date.hidden = true : false

const checked = () => {
    console.log("Welcome from fn");
    if(natured_yes.checked){
        console.log("Checked");
        
        natured_date.hidden = false
        console.log(natured_date.hidden);
        
    }    
}

const unChecked = () => {
    console.log("Welcome from fn");
    
    if(natured_no.checked === true){
        console.log("UNChecked");
        natured_date.hidden = true
    }
}

console.log(natured_date.hidden);
