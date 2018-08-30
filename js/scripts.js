//back end logic
function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
};
Pizza.prototype.price = function() {
  var sizePrice = 0;
  var pizzaPrice = 0;
  if (this.size === "small") {
    sizePrice = 9;
  } else if (this.size === "medium") {
    sizePrice = 13;
  } else {
    sizePrice = 17;
  }
  pizzaPrice = this.toppings.length + sizePrice;
  return pizzaPrice;
}

//front end logic

$(document).ready(function(){
  $('#name').change(function(){
    $('#message').html('Welcome ' + $('#name').val());
  });
  $("form.pizza-form").submit(function(event){
    event.preventDefault();
    var size = $('input[name=opt-size]:checked').val();
    var toppings = $('input[name=toppings]:checked').map(function() {
      return this.value;
    }).get();
    var pizza = new Pizza(size, toppings);
    var pizzaPrice = pizza.price();
    $("#new-order-display").text('Your ' + 'Pizza ' + 'is ' + '$' + pizzaPrice)
  })
})
