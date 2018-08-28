function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
};


// var sizes = ["small, 9", "medium, 13", "large, 17"]
// var toppings = [["olives, 1"], ["peppers, 1"], ["mushrooms, 1"], ["daiya, 1"]];

//front end logic
$(document).ready(function(){
  // console.log(sizes + toppings);
  $("form.pizza-form").submit(function(event){
    event.preventDefault();
    var size = $('input[name=opt-size]:checked').val();
    var toppings = $('input[name=toppings]:checked').map(function(){
      return this.value;
    }).get();
    console.log(size,toppings);
  })
})
