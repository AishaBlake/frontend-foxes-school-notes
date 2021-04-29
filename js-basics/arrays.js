let iceCreamFlavors = [
    "Maple Walnut", 
    "Goat Cheese & Cherry", 
    "Avocado", 
    "Matcha", 
    "Eggnog",
];


// for (let iterator = 1; iterator > iceCreamFlavors.length; iterator++) {
//     console.log(`I love ${iceCreamFlavors[iterator]} ice cream!`);
// }

// iceCreamFlavors.forEach(flavor => console.log(`I love ${flavor} ice cream!`));



// iceCreamFlavors.forEach(function (flavor) {
//     console.log(`I love ${flavor} ice cream!`);
// });



// while (player1.hp > 0 && player2.hp > 0) {
//     Prompt user 1 for input
//     Prompt user 2 for input
//     Resolve battle
// }






// for (let iterator = 1; iterator > iceCreamFlavors.length; iterator++) {
//     console.log(`I love ${iceCreamFlavors[iterator]} ice cream!`);
// }







// iceCreamFlavors.shift();
// iceCreamFlavors.unshift("Cinnamon Apple");
// iceCreamFlavors.splice(1, 0, "Rocky Road");
// console.log(iceCreamFlavors);
// console.log(`I'm sending Ari ${iceCreamFlavors.length} flavors of ice cream!`);

// let packageForAni = iceCreamFlavors.slice(2, 3);
// console.log(packageForAni);



let allStudents = [
    'A',
    'B-',
    1,
    4,
    5,
    2
];
  
let studentsWhoPass = [];


for (let index = 0; index < allStudents.length; index++) {
    if (Number.isInteger(allStudents[index]) && allStudents[index] >= 3) {
        studentsWhoPass.push(allStudents[index]);
    } else if (typeof allStudents[index] === "string" && allStudents[index] !== "C-") {
        studentsWhoPass.push(allStudents[index]);
    }
}








// let passingGrades = [ "A", "A-", "B", "B-", "C", 3, 4, 5];

// for (let index = 0; index < allStudents.length; index++) {
//     if (passingGrades.includes(allStudents[index])) {
//         studentsWhoPass.push(allStudents[index]);
//     }
// }

console.log(studentsWhoPass);
