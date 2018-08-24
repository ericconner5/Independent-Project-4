function Pizza() {
  this.size = size;
  this.toppings = toppings;
};
function Order() {
  this.pizza = Pizza;
  this.price = sumCharges;
};


var toppings = [["olives, 1"], ["peppers, 1"], ["mushrooms, 1"], ["daiya, 1"]];

$(document).ready(function(){
  $("form.pizza-form").submit(function(event){
    event.preventDefault();
    var size = $("#size")
    var toppings = $(".toppings.checkbox.checked").val();
    console.log(sizes + toppings);
  })
})

//front end logic
$( ".submit-button" ).click(function() {
  $( ".submit-button" ).change();
});
