console.log("Welcome from Edit");

//catch elements
const owner = document.getElementById("owner")
const address = document.getElementById("address")
const regDate = document.getElementById("regDate")
const phone = document.getElementById("phone")
const whatsapp = document.getElementById("whatsapp")
const petsName = document.getElementById("petsName")
const petAge = document.getElementById("petAge")
const bodyWeight = document.getElementById("bodyWeight")
const petType = document.getElementById("petType")
const breed = document.getElementById("breed")
const color = document.getElementById("color")
const female = document.getElementById("female")
const male = document.getElementById("male")
const yes = document.getElementById("yes")
const no = document.getElementById("no")
const natDate = document.getElementById("natDate")
const medication = document.getElementById("medication")
const rabies = document.getElementById("rabies")
const combined = document.getElementById("combined")
const deworming = document.getElementById("deworming")
const parasite = document.getElementById("parasite")
const rabiesDate = document.getElementById("rabiesDate")
const combinedDate = document.getElementById("combinedDate")
const dewormingDate = document.getElementById("dewormingDate")
const parasiteDate = document.getElementById("parasiteDate")
const comments = document.getElementById("comments")
const submitBtn  = document.getElementById("submitBtn")
const editHandlerBtn = document.getElementById("editHandlerBtn")





const editHandler = () => {
    owner.toggleAttribute("readonly")
    address.toggleAttribute("readonly")
    regDate.toggleAttribute("readonly")
    phone.toggleAttribute("readonly")
    whatsapp.toggleAttribute("disabled")

    petsName.toggleAttribute("readonly")
    petAge.toggleAttribute("readonly")
    bodyWeight.toggleAttribute("readonly")
    petType.toggleAttribute("disabled")
    breed.toggleAttribute("readonly")
    color.toggleAttribute("readonly")
    female.toggleAttribute("disabled")
    male.toggleAttribute("disabled")
    yes.toggleAttribute("disabled")
    no.toggleAttribute("disabled")
    natDate.toggleAttribute("readonly")
    medication.toggleAttribute("readonly")
    rabies.toggleAttribute("disabled")
    combined.toggleAttribute("disabled")
    deworming.toggleAttribute("disabled")
    parasite.toggleAttribute("disabled")

    rabiesDate.toggleAttribute("readonly")
    combinedDate.toggleAttribute("readonly")
    dewormingDate.toggleAttribute("readonly")
    parasiteDate.toggleAttribute("readonly")
    comments.toggleAttribute("readonly")
    submitBtn.toggleAttribute("hidden")
    if(editHandlerBtn.innerHTML === "Open Edition"){
        editHandlerBtn.innerHTML = "Close Edition"
    }else{
        editHandlerBtn.innerHTML = "Open Edition"
    }
    

}


