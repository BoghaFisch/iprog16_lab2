var DinnerInstructionsView = function (container, model) {

  // Shows view
  this.show = function() {
    // Change css
    $("#pageBody").css('background-image', 'url()');
    $("#pageHeader").css('background-color', '#FFF');

    // Change css
    $("#pageBody").css('background-image', 'url()');
    $("#pageHeader").css('background-color', '#FFF');

    // Create container
    container.html('<div id="dinnerInstructionsView"></div>');
    var diView = $("#dinnerInstructionsView");

    // Append top navigation banner
    diView.append("<div class='row myDinnerBanner'><div class='col-md-6'><h3>My Dinner: "+model.getNumberOfGuests()
      +" people</h3></div><div class='col-md-6'><button type='submit' class='btn btn-default pull-right backToEditButton'>Go back and edit dinner</button></div></div>");

    // Create preparations-list
    var menu = model.getFullMenu();
    var ditString = "<table id='dinnerInstructionsTable'>";
    for (var i = 0; i < menu.length; i++) {
      if (menu[i] != null) {
        ditString += "<tr>";

        // Add image column
        ditString += "<td class='col-md-2 imageCol'><img class='instructionsImage' src='images/"+menu[i].image+"'></td>";

        // Add Dinner Description
        ditString += "<td class='col-md-4 desciptionCol'><h3>"+menu[i].name+"</h3>"+menu[i].description+"</td>";

        // Add preparations
        ditString += "<td class='col-md-6 preparationCol'><h4>Preparation</h4>"+menu[i].description+"</td></tr>";
      }
    }

    // Close table
    ditString += "</table>";

    // Append html to container
    diView.append(ditString);

    // Hide splitscreen
    $("#splitscreen").hide();

    // Show container
    container.show();
  }

  // Hides view
  this.hide = function() {
    container.html("");
    container.hide();
  }

}
