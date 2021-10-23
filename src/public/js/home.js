// import axios from 'axios';
// const res = await axios.get(`/users`);
// console.log(res)
const id = document.getElementById("id")
const spanID = document.getElementById("spanID")
console.log();
const deleteHandler = () => {
    $.ajax({
        type: "POST",
        url: `/patient/delete/${spanID.innerHTML}`,
        // data: JSON.stringify(obj),
        success: (res) => {
            console.log(res);
            console.log("Deeeleeeeeteeeed");
            window.location.href = res.url
        },
        error: (e) => {
            console.log(e);
        },
        dataType: "json",
        contentType: "application/json"
    })
}