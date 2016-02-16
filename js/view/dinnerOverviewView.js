var DinnerOverviewView = function (container, model) {

  this.show = function() {
    // Change css
    $("#pageBody").css('background-image', 'url()');
    $("#pageHeader").css('background-color', '#FFF');

    // Create div and table
    container.html('<div id="dinnerOverview"><div id="overviewTop"><h3>My dinner</h3>'
        +'<label>People: </label> <input type="number" id="numberOfGuests"></div>'
        +'<table class=".table col-md-12" id="dishesTable"><tr id="dishesTableHeader">'
        + '<th class="col-md-1"></th><th class="col-md-8">Dish</th><th class="col-md-2">Cost</th>'
        +'<th></th></tr></table></div>');

    // Generate data for the table
    $("#numberOfGuests").val(model.getNumberOfGuests());
    var menu = model.getFullMenu();
    for (var i = 0; i < menu.length; i++) {
      if (menu[i] != null) {
        $("#dishesTable").append("<tr class='dtItem'><td>"+model.getNumberOfGuests()+"</td><td>"+menu[i].name+"</td><td>"+model.getDishPrice(menu[i])+"</td><td><a href='#'><span class='glyphicon glyphicon-remove'></span></a></td></tr>");
      }
    }
    if (!model.menuFull()) {
      $("#dishesTable").append("<tr><td></td><td>Pending</td><td id='pendingPrice'>0</td><td></td></tr>");
    }
    $("#dishesTable").append("<tr><td colspan=4><hr class='breakLine'></td></tr>");
    $("#dishesTable").append("<tr><td></td><td></td><td id='totalMenuPrice' colspan=2>SEK:"+model.getTotalMenuPrice()+"</td></tr>");
    $("#dishesTable").append("<tr><td colspan=3><button type='submit' class='btn btn-default confirmButton'>Confirm dinner</button></td></tr>");

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
