//HomeView Object constructor
var HomeView = function (container, model) {

	this.show = function() {
		container.html('<div id="homeView"><div class="col-md-6" id="homeDescriptionBox"><h3>A Home Dinner Service</h3><hr id="lineBreak"><p>Lorem ipsum dolor sit amet, ut mei eros tacimates,'
			+' ancillae suavitate necessitatibus has id. Id duo suscipit persecuti, pro cu noluisse honestatis. Vim tale molestie ei, te has sadipscing persequeris complectitur. '
			+'Mutat oratio vocent at his, eu reque etiam accusamus mel.</p><br><p>start quickly</p><button class="btn btn-default" id="newDinnerButton" type="submit">Create new'
			+' dinner</button></div></div>');

		// change css
		$("#pageBody").css('background-image', 'url(images/peopleEating.jpg)');
		$("#pageHeader").css('background-color', 'rgba(233,206,132, 0.8)');

		// Hide splitscreen
		$("#splitscreen").hide();

		// Show container
		container.show();
	}
	this.hide = function() {

		// hide container
		container.html("");
		container.hide();
	}
}
