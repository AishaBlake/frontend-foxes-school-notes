// let myTrueBool = true;
// let myFalseBool = false;

// // compare average price of board game to OUR price
// let boardGameDBPrice, ourBoardGamePrice;

// if (boardGameDBPrice < ourBoardGamePrice) {
//     // displayHighDemandAlert
// } else if ( boardGameDBPrice > ourBoardGamePrice ) {
//     // displayLowPriceAlert
// } else {
//     // promoteBoardGameMeetup
// }

// // free shipping minimum

// if (cartTotal >= freeShippingMinimum) {
//     applyFreeShipping
// }

// // check coupon code

// if (userHasCoupon && isCouponValid) {
//     findCouponEffect
//     if (isRemainingTotalPositive || userIsExtremCouponer) {
//         discountUserTotal
//     }
//     // ....
// }

// // ....


// !(5 > 6)   // true

// let mentor = ""
// console.log(!!mentor);

// let variable = condition ? <return this if true> : <return this if false>

// let firstNumber = 20;
// let secondNumber = 10;
// let biggestNumber = 
//     firstNumber > secondNumber ? firstNumber : secondNumber;
let allStudents = [
    'A',
    'B-',
    1,
    4,
    5,
    2
];
  
let studentsWhoPass = [];

// for (let i = 0; i < 6; i++) {
//     if (Number.isInteger(allStudents[i]) && allStudents[i] >= 3) {
//         studentsWhoPass.unshift(allStudents[i]);
//     } else if (typeof allStudents[i] === "string" && allStudents[i] !== "C-") {
//         studentsWhoPass.unshift(allStudents[i]);
//     }
// }

allStudents.forEach(element => {
    if ((typeof element === "number" && element >= 3)
        || (typeof element === "string" && element !== "C-")) {
        studentsWhoPass.push(element);
    }
});

console.log(studentsWhoPass);