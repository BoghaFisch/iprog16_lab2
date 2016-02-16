var SelectDishView = function (container, model) {

  this.show = function() {
    // Change css
    $("#pageBody").css('background-image', 'url()');
    $("#pageHeader").css('background-color', '#FFF');

    // Create searchbar and empty table
    container.html('<div id="selectDishView"><div id="searchForDishView"><h3 id="searchForDishHeader">Select Dish</h3>'
        +'<hr class="breakLine"><form class="form-inline" id="searchForm"><div class="form-group">'
        +'<input type="text" class="form-control" id="searchBox" placeholder="Enter keywords">'
        +'<button type="submit" class="btn btn-default" id="submitSearch">Search</button></div>'
        +'<div class="form-group"><select class="form-control" id="selectType"><option>All</option>'
        +'<option>Starter</option><option>Main</option><option>Dessert</option></select></div></form></div>'
        +'<div id="dishesResults"><table id="dishesResultsTable"></table></div></div>');

    // Populate dishesTable
    var dishesResultsTable = $("#dishesResultsTable");
    var dishes = model.getAllDishes("main dish");
    var i = 0;
    var resultsString = "<tr id='firstRow'>";
    for (; i < dishes.length; i++) {
      // For every 4th dish, make a new row in the beginning
      if (i % 5 == 0) {
        resultsString += "</tr><tr>";
      }
      // Append the image, name and description to table
      resultsString += "<td><figure class='dishResultsFigure'><a href=''><img class='dishResultsImage' src='images/"+dishes[i].image+"'></a><figcaption style='text-align:center;'>"+dishes[i].name+"</figcaption></figure>";
      resultsString += "<div class='dishDescription'>"+dishes[i].description+"</div></td>";

    }
    // Add remaining td's for sizing
    while (i % 5 != 0) {
      resultsString += "<td></td>";
      i++;
    }
    resultsString +="</tr>";
    dishesResultsTable.append(resultsString);

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
