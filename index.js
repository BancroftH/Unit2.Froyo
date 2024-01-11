// promts user to enter a list of froyo flavors seperated by commas
const inputFlavors = prompt (
    "Please enter frozen yogurt flavors seperated by commas.",
    "Strawberry,Vanilla,Chocolate,Coffee,Blueberry"
);

// Loops through and splits list of flavors seperated by commas
const stringArray = inputFlavors.split(",");
for (let i = 0; i < stringArray.length; i++) {
    console.log(stringArray[i]);
}
// An object is used to keep count of how many orders there are of each flavor
const orders = {
    Strawberry: 3,
    Vanilla: 6,
    Chocolate:2,
    Coffee: 1,
    Blueberry: 4,
}
console.log(Object.keys(orders));
console.log(Object.values(orders));