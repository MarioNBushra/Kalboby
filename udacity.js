// //Quiz: Checking your Balance (3-5)

// var balance = 350.2569;
// var checkBalance = true;
// var isActive = true;

// if (checkBalance === true){
//     if(isActive === true && balance > 0){
//         console.log("Your balance is $" + balance.toFixed(2) + ".");
//     }else if(isActive === false){
//         console.log("Your account is no longer active.");
//     }else if(isActive === true && balance === 0){
//         console.log("Your account is empty.");
//     }else if(isActive === true && balance < 0){
//         console.log("Your balance is negative. Please contact bank.");
//     }
// }else{
//     console.log("Thank you. Have a nice day!");
// }

// var test = [12, 929, 11, 3, 199, 1000, 7, 1, 24, 37, 4,
//     19, 300, 3775, 299, 36, 209, 148, 169, 299,
//     6, 109, 20, 58, 139, 59, 3, 1, 139
// ];

// test.forEach(function(e){
//     if(e % 3 === 0){
//         e += 100
        
//     }
// })
// console.log(test)

// var bills = [50.23, 19.12, 34.01,
//     100.11, 12.15, 9.90, 29.11, 12.99,
//     10.00, 99.22, 102.20, 100.10, 6.77, 2.22
// ];
// var totals = bills.map(function(e){
//     e *= 1.15
//     e.toFixed(2)
//     Number(e)
//     return e

// })

// console.log(totals);

// var numbers = [
//     [243, 12, 23, 12, 45, 45, 78, 66, 223, 3],
//     [34, 2, 1, 553, 23, 4, 66, 23, 4, 55],
//     [67, 56, 45, 553, 44, 55, 5, 428, 452, 3],
//     [12, 31, 55, 445, 79, 44, 674, 224, 4, 21],
//     [4, 2, 3, 52, 13, 51, 44, 1, 67, 5],
//     [5, 65, 4, 5, 5, 6, 5, 43, 23, 4424],
//     [74, 532, 6, 7, 35, 17, 89, 43, 43, 66],
//     [53, 6, 89, 10, 23, 52, 111, 44, 109, 80],
//     [67, 6, 53, 537, 2, 168, 16, 2, 1, 8],
//     [76, 7, 9, 6, 3, 73, 77, 100, 56, 100]
// ];

// for (var i = 0; i < numbers.length; i++){
//     for(var y = 0; y < numbers[i].length; y++){
//         if (numbers[i][y] % 2 === 0) numbers[i][y] = "even"
//         else numbers[i][y] = "odd"
//     }
// }

// console.log(numbers)

// var savingsAccount = {
//     balance: 1000,
//     interestRatePercent: 1,
//     deposit: function addMoney(amount) {
//         if (amount > 0) {
//             savingsAccount.balance += amount;
//         }
//     },
//     withdraw: function removeMoney(amount) {
//         var verifyBalance = savingsAccount.balance - amount;
//         if (amount > 0 && verifyBalance >= 0) {
//             savingsAccount.balance -= amount;
//         }
//     },
//     // your code goes here
//     printAccountSummary: function(){
//         return `Welcome! Your balance is currently $${savingsAccount.balance} and your interest rate is ${savingsAccount.interestRatePercent}%.`
//     }
// };

// console.log(savingsAccount.printAccountSummary());

// var facebookProfile = {
//     name: "Mario Nathan",
//     friends: 225,
//     messages: ["Hi", "Bye"],
//     postMessage: function(message){
//         return facebookProfile.messages.push(message)
//     },
//     deleteMessage: function(index){
//         return facebookProfile.messages.splice(index, 1)
//     },
//     addFriend: function(){
//         return facebookProfile.friends += 1
//     },
//     removeFriend: function(){
//         return facebookProfile.friends -= 1
//     }
// }
// facebookProfile.removeFriend()
// console.log(facebookProfile)

// function createAnimalTradingCardHTML(animal) {
//     const cardHTML = `
//         <div class="card">
//             <h3 class="name"> ${animal.name} </h3>
//             <img src="${animal.name}.jpg" alt="${animal.name}" class="picture">
//             <div class="description">
//                 <p class="fact"> ${animal.fact} </p>
//                 <ul class="details">
//                     <li><span class="bold">Scientific Name</span>: ${animal.name} </li>
//                     <li><span class="bold">Average Lifespan</span>: ${animal.lifespan}</li>
//                     <li><span class="bold">Average Speed</span>: ${animal.speed} </li>
//                     <li><span class="bold">Diet</span>: ${animal.diet}  </li>
//                 </ul>
//                 <p class="brief"> ${animal.summary} </p>
//             </div>
//         </div>
//     `

//     return cardHTML;
// }



// console.log(createAnimalTradingCardHTML(cheetah));

// const circle = {
//     radius: 10,
//     color: 'orange',
//     getArea: function()  {
//       return Math.PI * this.radius * this.radius;
//     },
//     getCircumference: function() {
//       return 2 * Math.PI * this.radius;
//     }
//   };
  
//   let {radius,  getArea, getCircumference} = circle;

//   console.log(getArea());

// const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// for (const digit in digits) {
//   console.log(digit);
// }

// const primes = new Set([2, 3, 5, 7, 11, 13, 17, 19, 23, 29]);
// console.log(primes);


// function average(...numbers) {
//   if(numbers.length === 0){
//     return 0
//   }
//   let result = 0
  
//   for(let number of numbers){
//       result += number
      
//   }
//   result /= numbers.length
  
//   return result
// }

// console.log(average(2, 6));
// console.log(average(2, 3, 3, 5, 7, 10));
// console.log(average(7, 1432, 12, 13, 100));
// console.log(average());



const object = {
    "name": "Mario"
}

