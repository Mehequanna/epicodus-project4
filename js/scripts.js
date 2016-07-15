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

  if ( this.topping === "pepperoni") {
    this.price += 0.5;
  } else if ( this.topping === "supreme" ) {
    this.price += 1;
  }
}



// User end logic
$(document).ready(function() {
  $("#orderForm").submit(function(event) {
    event.preventDefault();

    var pizzaSize = $("input:radio[name=size]:checked").val();
    var pizzaTopping = $("input:radio[name=topping]:checked").val();
    console.log(pizzaTopping);

    var userPizza = new Pizza(pizzaSize, pizzaTopping);

    userPizza.salePrice();
    console.log(userPizza.price);
    console.log(userPizza.size);
    console.log(userPizza.topping);
    $("#sizeReceipt").html(userPizza.size);
    $("#toppingReceipt").html(userPizza.topping);
    $("#priceReceipt").html(userPizza.price);
    $("#orderForm").hide();
    $("#orderReceipt").show();

  });
});
