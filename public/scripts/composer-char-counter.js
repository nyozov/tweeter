$(document).ready(function() {
  console.log("ready");
  $("#tweet-text").keyup(function() {
  
    let charCount = 140 - $(this).val().length;
    $(".new-tweet .counter").text(charCount);
 
    if (charCount < 0) {
      $(".new-tweet .counter").css("color", "red");
    
    } else {
      $(".new-tweet .counter").css("color", "#545149");
    }
  
  });

});