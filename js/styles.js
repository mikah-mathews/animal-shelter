$(document).ready(function(){
  $("button").click(function() {
    $("body").toggleClass("dark-background");
  });

  $("img.pop").click(function() {
    $(this).toggleClass("big-image");
  });
});