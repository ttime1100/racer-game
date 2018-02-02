$(document).ready( function () {



$("#press").mouseenter( function() {

$(this).animate({height:'+=100px'});
});

$("#press").mouseleave( function() {
  $(this).animate({height:'-=100px'});
});

$("#press").click( function() {
document.location.href = "../views/game.html"

});

$("#go").click(function() {
  $("#beev").animate({ left:'+=20px' });
    x++;

    if ( x === 100) {
    alert("You've Won");
    document.location.href = "../views/game.html"
  }
  });


$("#go-three").click(function() {
  $("#bugs").animate({ left:'+=20px' });

});

$("#go-two").click(function() {
  $("#scooby").animate({ left:'+=20px' });
});

$("body").on('keypress', function(e) {
if(e.charCode === 112) {
  $("#beev").animate({left: '+=20px'});
}
  });

$("body").on('keypress', function(e) {
if(e.charCode === 104) {
  $("#scooby").animate({left: '+=20px'});
  }

  });

  var ale = $("#bugs").position();
  var lee = $("#finish-line").position();

  $("body").on('keypress', function(e) {

if (e.charCode === 113) {
  $("#bugs").animate({left:'+=20px'});

}
plus();

});

var num = 1;

function plus() {
   num++;

   if (num === 100) {
     alert("Done");

  document.location.href = "C:/Users/T-Time/wdi/projects/racer-game/views/game.html";
}
}





/*if (ale.left === 1180 ) {
  alert("You won");
}
*/



// 1183.3333740234375

  /*function youWon() {

  if($("bugs").position() === )
  }


*/


});
