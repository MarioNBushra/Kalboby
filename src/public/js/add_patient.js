
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
const alertMessage = document.getElementById("alertMessage")

const objectHandler = async() => {
    
    try {
        const obj = {
            owner_name: owner.value,
            address: address.value,
            phone: phone.value,
            pet_name: petsName.value,
            pet_age: petAge.value,
            pet_weight: bodyWeight.value,
            pet_species: petType.value,
            pet_breed: breed.value,
            pet_color: color.value,
            medication: medication.value,
            comments: comments.value,
            reg_date: regDate.value,
            pet_natured_date: natDate.value,
            pet_vaccination: [
                {
                    vaccination_date: rabiesDate.value
                },
                {
                    vaccination_date: combinedDate.value
                },
                {
                    vaccination_date: dewormingDate.value
                },
                {
                    vaccination_date: parasiteDate.value
                }
    
            ]
        }
        rabies.checked ? obj.pet_vaccination[0].vaccination_name = "Rabies Vaccine" : false
        combined.checked ? obj.pet_vaccination[1].vaccination_name = "Coimbined Vaccine" : false
        deworming.checked ? obj.pet_vaccination[2].vaccination_name = "Deworming Vaccine" : false
        parasite.checked ? obj.pet_vaccination[3].vaccination_name = "Parasite Vaccine" : false
        female.checked ? obj.pet_gender = "female": false
        male.checked ? obj.pet_gender = "male" : false
        yes.checked ? obj.pet_natured = "yes" : false
        no.checked ? obj.pet_natured = "no" : false
        whatsapp.checked ? obj.whatsapp = true : obj.whatsapp = false
        console.log(obj);
    
        $.ajax({
            type: "POST",
            url: "/patient/add",
            data: JSON.stringify(obj),
            success: () => {
                console.log("Post Success");
                alertMessage.classList.add("alert-success")
                alertMessage.hidden = false
                
                setTimeout(() => {
                    window.location.href = "/home"
                }, 3000)
            },
            error: (e) => {
                console.log(e);
                alertMessage.classList.add("alert-danger")
                alertMessage.hidden = false
                alertMessage.innerHTML = "Error, Review Your Inputs"
            },
            dataType: "json",
            contentType: "application/json"
        })
        
    } catch (error) {
        console.log(error);
    }
}




