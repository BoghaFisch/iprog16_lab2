var DinnerSummaryView = function (container, model) {

  // Shows view
  this.show = function() {
    // Change css
    $("#pageBody").css('background-image', 'url()');
    $("#pageHeader").css('background-color', '#FFF');

    // Create container
    container.html('<div id="dinnerSummaryView"></div>');
    var dsView = $("#dinnerSummaryView");

    // Append top navigation banner
    dsView.append("<div class='row myDinnerBanner'><div class='col-md-6'><h3>My Dinner: "+model.getNumberOfGuests()
      +" people</h3></div><div class='col-md-6'><button type='submit' class='btn btn-default pull-right backToEditButton'>Go back and edit dinner</button></div></div>");

    // Get menu
    var menu = model.getFullMenu();
    var menuTableString = "<table id='dinnerSummaryTable'><tr><td class='col-md-2'></td>";

    // Append dish-figures, captions and prices
    for (var i = 0; i < menu.length; i++) {
      if (menu[i] != null) {
        menuTableString += "<td class='col-md-2'><figure class='dishSummaryFigure'><img class='dishSummaryImage' src='images/"+menu[i].image
          +"'><figcaption style='text-align:center;' class='dishName'>"+menu[i].name+"</figcaption><figcaption class='dishPrice' style='text-align:right;'>"+
          model.getDishPrice(menu[i])+" SEK</figcaption></figure></td>";
      }
      else {
        menuTableString += "<td class='col-md-2'><figure class='dishSummaryFigure'><img class='dishSummaryImage' src='images/noimage.jpg'><figcaption style='text-align:center;' class='dishName'>"
          +"None selected</figcaption><figcaption class='dishPrice' style='text-align:right;'>0 SEK</figcaption></figure></td>";
      }
    }

    // Append dishes total price
    menuTableString += "<td class='col-md-2' id='priceSummary'><p>Total: <br />"+model.getTotalMenuPrice()+" SEK</p></td></tr></table>";

    dsView.append(menuTableString);
    dsView.append("<hr class='breakLine'>");
    dsView.append("<div id='printButtonDiv'><button type='submit' class='btn btn-default printRecipeButton'>Print Full Recipe</button></div>");

    // Hide splitscreen
    $("#splitscreen").hide();

    // Show container
    container.show();
  }

  // hides view
  this.hide = function() {
    container.html("");
    container.hide();
  }
}
