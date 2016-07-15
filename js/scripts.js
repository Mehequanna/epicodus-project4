// Back end logic

function Pizza(size, topping, prize) {
  this.size = size;
  this.topping = topping;
  this.price = 10;
}

Pizza.prototype.salePrice = function() {
  if ( this.size === "medium" ) {
    this.price += 1;
  } else if (this.size === "large") {
    this.price += 2;
  }

  if ( this.topping === "chorizo") {
    this.price += 1;
  } else if ( this.topping === "vichingo" ) {
    this.price += 2;
  }
}



// User end logic
$(document).ready(function() {
  $("#orderForm").submit(function(event) {
    event.preventDefault();

    var pizzaSize = $("input:radio[name=size]:checked").val();
    var pizzaTopping = $("input:radio[name=topping]:checked").val();

    var userPizza = new Pizza(pizzaSize, pizzaTopping);

    userPizza.salePrice();

    $("#sizeReceipt").html(userPizza.size);
    $("#toppingReceipt").html(userPizza.topping);
    $("#priceReceipt").html(userPizza.price);
    $("#orderForm").hide();
    $("#orderReceipt").show();

  });
});
