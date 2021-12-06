//Quiz: Checking your Balance (3-5)

var balance = 350.2569;
var checkBalance = true;
var isActive = true;

if (checkBalance === true){
    if(isActive === true && balance > 0){
        console.log("Your balance is $" + balance.toFixed(2) + ".");
    }else if(isActive === false){
        console.log("Your account is no longer active.");
    }else if(isActive === true && balance === 0){
        console.log("Your account is empty.");
    }else if(isActive === true && balance < 0){
        console.log("Your balance is negative. Please contact bank.");
    }
}else{
    console.log("Thank you. Have a nice day!");
}