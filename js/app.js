$(function() {
	//We instantiate our model
	var model = new DinnerModel();

	//And create the needed controllers and views
	var homeView = new HomeView($("#fullscreen"), model);
	var dinnerOverviewView = new DinnerOverviewView($("#leftContainer"), model);
	var selectDishView = new SelectDishView($("#rightContainer"), model);
	var dishDetailsView = new DishDetailsView($("#rightContainer"), model);
	var dinnerSummaryView = new DinnerSummaryView($("#fullscreen"), model);
	var dinnerInstructionsView = new DinnerInstructionsView($("#fullscreen"), model);

	model.addDishToMenu(1);
	model.addDishToMenu(102);

	model.setDetailedDish(1);

	dinnerInstructionsView.show();

});
