const printToDom = (stringToPrint, divId) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML += stringToPrint;
};

const sonnet = "How like a winter hath my absence been From thee, the pleasure of the fleeting year! What freezings have I felt, what dark days seen! What old December's bareness everywhere! And yet this time removed was summer's time; The teeming autumn, big with rich increase, Bearing the wanton burden of the prime, Like widow'd wombs after their lords' decease: Yet this abundant issue seemed to me But hope of orphans, and unfathered fruit; For summer and his pleasures wait on thee, And, thou away, the very birds are mute: Or, if they sing, 'tis with so dull a cheer, That leaves look pale, dreading the winter's near.";


// console.log("index of orphans", sonnet.indexOf("orphans"));
// console.log("num of chars", sonnet.length);
// let newSonnet = sonnet.replace("winter", "yuletide");

// newSonnet = newSonnet.replace(/ the /g, " a large ");

// const sonnetDiv = document.getElementById('sonnet');
// sonnetDiv.innerHTML = `<h3>${newSonnet}</h3>`;


let str = "I am cow cow Please locate where too 'locate' occurs!!"
let pos = str.lastIndexOf("occurs");
console.log('Print pos: ' + pos);
console.log('Length : ' + str.length);
console.log('Locate : ' + str.indexOf("locate",27));
console.log('Search too: ' + str.search('too'));
console.log('Search am: ' + str.search('am'));
let str3 = ('Search am: ' + str.search('am'));

///////////////////////////////////////


// const SPENDING_THRESHOLD = 200;
// const TAX_RATE = 0.08;
// const PHONE_PRICE = 99.99;
// const ACCESSORY_PRICE = 9.99;

// var bank_balance = 303.91;
// var amount = 0;


// while (amount < bank_balance){
//     amount = amount + PHONE_PRICE;
// };



//////////////////////////////////////

// const price = 200;
// let phones = 0; 
// let money = 3000;



// while(phones < 15){ //The 15 is created in one 'transaction'
//     phones = money / price;// And not a loop (one loop);
//     money = money - (price*phones);
//     cost = price*phones;
// };

// function tax(amount){
//     return (amount * .0925) + amount;
// };

// let cost_tax = tax(cost);
// console.log("Price of phone: " + "$" + price);
// console.log("Number of phones bought: " + phones);
// console.log("Money left after purchase: " + "$"  + money);
// console.log("Total cost of the phones: " + "$"  + cost);
// console.log("Total with tax: " + "$"  + cost_tax);

