const vegetarian = "Vegetarian Pizza";
const hawaiian = "Hawaiian Pizza";
const pepperoni = "Pepperoni Pizza";

const pizzaPrice = 80;

//Put your Javscript code here:
// 1.2:
alert(
  "Hey! Happy to serve your pizza. On our menu we have " +
    vegetarian +
    ", " +
    hawaiian +
    " and " +
    pepperoni
);

//2.3:

// let orderName = prompt("Enter the name of the pizza you want to order today.");
// let orderQuantity = prompt("How many of " + orderName + " do you want?");
// if (orderQuantity == 0) {
//   alert("No order made");
// }

//3.1:
// if (
//   orderName === vegetarian ||
//   orderName === hawaiian ||
//   orderName === pepperoni
// ) {
// } else {
//   alert("Not in the menu.");
// }
//2.4:
// let orderTotal = orderQuantity * pizzaPrice;
// if (orderQuantity != 0) {
// }
// } else{
//   alert("No order made");
// }
// if (orderQuantity >= 1 && orderQuantity <= 2) {
//   alert(
//     "Great, I'll get started on your " +
//       orderName +
//       " right away, it will cost " +
//       orderTotal +
//       " kr. The pizzas will take 10 minutes."
//   );
// } else if (orderQuantity >= 3 && orderQuantity <= 5) {
//   alert(
//     "Great, I'll get started on your " +
//       orderName +
//       " right away, it will cost " +
//       orderTotal +
//       " kr. The pizzas will take 15 minutes."
//   );
// } else {
//   alert(
//     "Great, I'll get started on your " +
//       orderName +
//       " right away, it will cost " +
//       orderTotal +
//       " kr. The pizzas will take 20 minutes."
//   );
// }
// } else {
//   alert("No order made");
// }
// } else {
//   alert("Not in the menu.");
// }

//4:
function checkOrderName(orderName) {
  return (
    orderName === "vegetarian" ||
    orderName === "hawaiian" ||
    orderName === "pepperoni"
  );
}

function totalCost(orderQuantity) {
  return pizzaPrice * orderQuantity;
}

function cookingTime(orderQuantity) {
  if (orderQuantity >= 1 && orderQuantity <= 2) {
    return 10;
  } else if (orderQuantity >= 3 && orderQuantity <= 5) {
    return 15;
  } else {
    return 20;
  }
}

let orderName = prompt("Enter the name of the pizza you want to order today.");
let orderQuantity = prompt(`How many of ${orderName}  do you want?`);

if (checkOrderName(orderName)) {
  let total = totalCost(orderQuantity);
  let time = cookingTime(orderQuantity);
  alert(
    `Great, I´ll get started on your ${orderName} right away, it will cost ${total} kr. The pizzas will take ${time} minutes.`
  );
} else {
  alert("We don't have that pizza on the menu.");
}
