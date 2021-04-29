let salutation, personName, timeOfDay, clothing;

salutation = "Hey";
personName = "Melanie";
timeOfDay = "night";
clothing = "hat";

function displayCompliment() {
  const message = `${salutation}, ${personName}! Your ${clothing} looks spiffy!`;
  console.log(message);
}

function displayGreeting() {
  const message = `${salutation}, ${personName}! Nice ${timeOfDay}, isn't it?`;
  console.log(message);
}

displayGreeting();
displayCompliment();





