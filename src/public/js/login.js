console.log("Welcome to login script");

const email = document.getElementById("email")
const password = document.getElementById("password")

const requestHanndler = () => {

    const obj = {
        user_name: email.value,
        password: password.value
    }
    $.ajax({
        type: "POST",
        url: "/dashboard/admin/kalboby/login",
        data: JSON.stringify(obj),
        success: (res) => {
            console.log(res);
            document.cookie = res.token
            
            
        },
        error: (e) => {
            console.log(e);
            
        },
        dataType: "json",
        contentType: "application/json"
    })
    
}