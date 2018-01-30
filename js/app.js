$(document).ready( function () {



$("button").mouseenter( function() {

$(this).animate({height:'+=100px'});
});

$("button").mouseleave( function() {
  $(this).animate({height:"-=100px"});
});

$("button").click( function() {
document.location.href = "../views/game.html"

});



});
