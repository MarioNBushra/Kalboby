let regDatee = document.getElementById("regDate")
var today = new Date();
// var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+ today.getDay();
var currentDate = today.toISOString().substring(0,10);

regDatee.value = currentDate