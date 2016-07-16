// Back end logic

// Pizza contrsuctor
function Pizza(size, topping, prize) {
  this.size = size;
  this.topping = topping;
  this.price = 100;
}

// Prototype for calculating pizza price
Pizza.prototype.salePrice = function() {
  if ( this.size === "medium" ) {
    this.price += 100;
  } else if (this.size === "large") {
    this.price += 200;
  }

  if ( this.topping === "chorizo") {
    this.price += 100;
  } else if ( this.topping === "vichingo" ) {
    this.price += 200;
  }
}



// User end logic
$(document).ready(function() {
  $("#orderForm").submit(function(event) {
    event.preventDefault();

    // Holds info from user
    var pizzaSize = $("input:radio[name=size]:checked").val();
    var pizzaTopping = $("input:radio[name=topping]:checked").val();

    // Creates pizza obect
    var userPizza = new Pizza(pizzaSize, pizzaTopping);

    // Calculates price
    userPizza.salePrice();

    // Prints needed receipt info to the page
    $("#sizeReceipt").html(userPizza.size);
    $("#toppingReceipt").html(userPizza.topping);
    $("#priceReceipt").html(userPizza.price);

    // Hides order form after order is submitted
    $("#orderForm").hide();
    $("#orderReceipt").show();

  });
});
