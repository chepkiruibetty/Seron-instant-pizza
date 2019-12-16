// // declaring variables
var pizzaFlavour = [
  "Berry",
  "Butternut Squash",
  "Chicken",
  "Hummus",
  "Turkish Ground"
];
var pizzaSize = ["Regular", "Medium", "Large"];
var pizzaCrust = ["Thin crust", "Thick crust", "Deep crust", "Stuffed crust"];
var pizzaTopping = ["Onion", "Mushroom", "bacon", "black olives"];

// calling functions
function getFlavour() {
  // var flavour = document.getElementById("pizzaflavour").value;
  var flavour = $("#pizzaflavour :selected").val();
  return parseInt(flavour);
}

function getSize() {
  // var size = document.getElementById("pizzasize").value;
  var size = $("#pizzasize :selected").val();
  return parseInt(size);
}

function getCrust() {
  // var crust = document.getElementById("pizzacrust").value;
  var crust = $("#pizzacrust :selected").val();
  return parseInt(crust);
}
/* 
function getCrast() {
  // var crast = document.getElementsByName("pizza").name;
  var crast = $("#pizza :selected").val();
  return toString(crast);
} */

function getTopping() {
  // var topping = document.getElementById("pizzatopping").value;
  var topping = $("#pizzatopping :selected").val();
  return parseInt(topping);
}

function getNumber() {
  // var number = document.getElementById("number").value;
  var number = $("#number").val();
  return parseInt(number);
}

// function getAmount() {
//   var results =
//     (getFlavour() + getSize() + getCrust() + getTopping()) * getNumber();
//   alert(
//     "You've ordered " +
//       getNumber("") +
//       " pizza's," +
//       " of " +
//       getCrast("") +
//       "which amounts to Ksh. " +
//       results +
//       " Thanks for your order,welcome again!"
//   );
//   prompt("Enter your location");
//   prompt("Enter your name");
//   prompt("Enter your phone number");
//   alert("Your order will be delivered in a while, delivery fee is  Ksh.150/=");
// }
function getAmount(flavour, size, crust, topping, number) {
  var results =
    (parseInt(flavour.val()) +
      parseInt(size.val()) +
      parseInt(crust.val()) +
      parseInt(topping.val())) *
    parseInt(number.val());
  alert(
    "You've ordered " + 
      number.val() +  
      " "  +
      "pizza's" + 
      " "  +
      flavour.html() +
      " "  + 
      size.html() +
      " "  +
      crust.html() +
      " "  + 
      topping.html() +
      " "  +
      " which amounts to Ksh. "  +
      results +
      " Thanks for your order,welcome again!"
  );
  prompt("Enter your location");
  prompt("Enter your name");
  prompt("Enter your phone number");
  alert("Your order will be delivered in a while, delivery fee is  Ksh.150/=");
}
function getPick(flavour, size, crust, topping, number) {
  var results =
  (parseInt(flavour.val()) +
  parseInt(size.val()) +
  parseInt(crust.val()) +
  parseInt(topping.val())) *
  parseInt(number.val());
  alert(
    "You've ordered "  +
    number.val() +
    " "  +
    " pizza's, "  +
    flavour.html() +
    " "   + 
    size.html() +
    " "  +
    crust.html() +
    "  "  + 
    topping.html() +
    "  "  +
    " which amounts to Ksh. " +
      results  +
      "  Thanks for shopping with us  "
  );
}
$(document).ready(function() {
  $("#make-delivery").click(function(event) {
    var flavour = $("#pizzaflavour :selected");
    var size = $("#pizzasize :selected");
    var crust = $("#pizzacrust :selected");
    var topping = $("#pizzatopping :selected");
    var number = $("#number");

    getAmount(flavour, size, crust, topping, number);
    event.preventDefault();
  });
});
$(document).ready(function() {
  $("#pick-up").click(function(event) {
    var flavour = $("#pizzaflavour :selected");
    var size = $("#pizzasize :selected");
    var crust = $("#pizzacrust :selected");
    var topping = $("#pizzatopping :selected");
    var number = $("#number");

    getPick(flavour, size, crust, topping, number);
    event.preventDefault();
  });
});
