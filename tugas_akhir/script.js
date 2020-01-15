
$(document).ready(function() {

  var padOne = new Audio('sound/SD0025.mp3');
  $('.pad-1').mousedown(function() {
    padOne.load()
    padOne.play();
  });

  var padTwo = new Audio('sound/SD0010.mp3');
  $('.pad-2').mousedown(function() {
    padTwo.load();
    padTwo.play();
  });

  var padThree = new Audio('sound/SD0000.mp3');
  $('.pad-3').mousedown(function() {
    padThree.load();
    padThree.play();
  });

  var padFour = new Audio('sound/RS.mp3');
  $('.pad-4').mousedown(function() {
    padFour.load();
    padFour.play();
  });

  var padFive = new Audio('sound/OH25.mp3');
  $('.pad-5').mousedown(function() {
    padFive.load();
    padFive.play();
  });

  var padSix = new Audio('sound/MA.mp3');
  $('.pad-6').mousedown(function() {
    padSix.load();
    padSix.play();
  });

  var padSeven = new Audio('sound/CY0010.mp3');
  $('.pad-7').mousedown(function() {
    padSeven.load();
    padSeven.play();
  });
  
  var padEight = new Audio('sound/CH.mp3');
  $('.pad-8').mousedown(function() {
    padEight.load();
    padEight.play();
  });

  var padNine = new Audio('sound/CB.mp3');
  $('.pad-9').mousedown(function() {
    padNine.load();
    padNine.play();
  });
  
  var padTen = new Audio('sound/BD0010.mp3');
  $('.pad-10').mousedown(function() {
    padTen.load();
    padTen.play();
  });
  
  var padEleven = new Audio('sound/BD0000.mp3');
  $('.pad-11').mousedown(function() {
    padEleven.load();
    padEleven.play();
  });
  
  var padTwelve = new Audio('sound/CP.mp3');
  $('.pad-12').mousedown(function() {
    padTwelve.load();
    padTwelve.play();
  });
  
  
  $(window).keydown(function(e) {
    var code = e.keyCode;
    var kc = String.fromCharCode(e.keyCode);
    $("div[data-code='"+code+"']").addClass("active")
    console.log(code);
    
    switch(kc) {
      case "R":
        padOne.load();
        padOne.play();
        break;
      case "T":
        padTwo.load();
        padTwo.play();
        break;
      case "Y":
        padThree.load();
        padThree.play();
        break;
      case "U":
        padFour.load();
        padFour.play();
        break;
      case "F":
        padFive.load();
        padFive.play();
        break;
      case "G":
        padSix.load();
        padSix.play();
        break;
      case "H":
        padSeven.load();
        padSeven.play();
        break;
      case "J":
        padEight.load();
        padEight.play();
        break;
      case "V":
        padNine.load();
        padNine.play();
        break;
      case "B":
        padTen.load();
        padTen.play();
        break;
      case "N":
        padEleven.load();
        padEleven.play();
        break;
      case "M":
        padTwelve.load();
        padTwelve.play();
        break;
      default:
    }
  });

  $(window).keyup(function(e) { 
    var code = e.keyCode;
    $("div[data-code='"+code+"']").removeClass("active");
  });

});
