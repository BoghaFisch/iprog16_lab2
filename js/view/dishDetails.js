var DishDetailsView = function (container, model) {

  this.show = function() {
    // Change css
    $("#pageBody").css('background-image', 'url()');
    $("#pageHeader").css('background-color', '#FFF');

    // Create dish details grid
    container.html('<div id="dishDetailsView"><div class="row"><div class="col-md-6" id="dishDescription">'
        +'</div><div class="col-md-6" id="dishIngredients"></div></div><div id="preparationInstructions">'
        +'</div></div>');

    var dishDescription = $("#dishDescription");
    var dishIngredients = $("#dishIngredients");
    var preparationInstructions = $("#preparationInstructions");

    // Get the selected dish to show details for
    var selectedDish = model.getDetailedDish();

    // Add dish name, description and image to container
    dishDescription.append("<h3 id='dishDetailsHeader'>"+selectedDish.name+"</h3>");
    dishDescription.append("<figure id='selectedDishFig'><img src='images/"+selectedDish.image+"' ><figcaption>"+selectedDish.description+"</figcaption></figure>");
    dishDescription.append("<button class='btn btn-default' id='confirmDishButton' type='submit'>Back to Select Dish</button>");

    // Add the list of ingredients table header
    var numPeople = model.getNumberOfGuests();
    dishIngredients.append("<h4 id='ingredientsHeader'>INGREDIENTS FOR "+numPeople+" PEOPLE</h4>");
    dishIngredients.append("<hr class='breakLine'>");

    // Add table
    var ingredients = selectedDish.ingredients;
    var tString = "<table id='dtIngredientsTable'>";
    for (var i = 0; i < ingredients.length; i++) {
      tString += "<tr><td class='ingredientAmount'>"+(ingredients[i].quantity * numPeople) + ingredients[i].unit + "</td><td class='ingredientName'>"
        + ingredients[i].name + "</td><td class='ingredientPrice'>SEK"+ (ingredients[i].price * numPeople) + "</td></tr>";
    }
    tString += "</table>";
    dishIngredients.append(tString);
    dishIngredients.append("<hr class='breakLine'>");
    dishIngredients.append("<div class='row'>");
    dishIngredients.append("<div class='col-md-6'><button class='btn btn-default' id='confirmDishButton' type='submit'>Confirm Dish</button></div>");
    dishIngredients.append("<div class='col-md-6'>SEK "+model.getDishPrice(selectedDish)+"</div>");

    // Add preparation instructions
    preparationInstructions.append("<h3>Preparation</h3>");
    preparationInstructions.append(selectedDish.description);

    // Update the pending price
    $("#pendingPrice").html(model.getDishPrice(selectedDish));

    // hide fullscreen
    $("#fullscreen").hide();

    // Show container
    container.show();
  }
  this.hide = function() {
    container.html("");
    container.hide();
  }

}
