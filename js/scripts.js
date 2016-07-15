// Back end logic

function Pizza(size, toppings, prize) {
  this.size = size;
  this.toppings = toppings;
  this.price = 10;
}

Pizza.prototype.salePrice = function() {
  if ( this.size === "medium" ) {
    this.price += 1;
  } else if (this.size === "large") {
    this.price += 2;
  }

  if ( this.toppings === "pepperoni") {
    this.price += 0.5;
  } else if ( this.toppings === "supreme" ) {
    this.price += 1;
  }
}



// User end logic
$(document).ready(function() {
  $("#order").sumbit(function(event) {
    event.preventDefault();


  });
});
