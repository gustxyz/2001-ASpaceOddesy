
//Page Scroller function
$(document).ready(function() {
			$('#fullpage').fullpage({
				verticalCentered: false
			});
		});


//custom video

//Star animations
setInterval(function() {
  // method to be executed;
  $("#star-1").css("display", "none");

}, 500);


setInterval(function() {
  // method to be executed;
  $("#star-1").css("display", "block");

}, 5000);



setInterval(function() {
  // method to be executed;
  $("#star-2").css("display", "none");

}, 200);


setInterval(function() {
  // method to be executed;
  $("#star-2").css("display", "block");

}, 3000);


setInterval(function() {
  // method to be executed;
  $("#star-3").css("display", "none");

}, 700);


setInterval(function() {
  // method to be executed;
  $("#star-3").css("display", "block");

}, 8000);


//lettering
  $(document).ready(function() {
	    $("#trailer-title").lettering();
	  });