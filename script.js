var random = 0;
var tip = 0;
var series = [];
var guess = [];
var turn = 1;
var counter = 0;
var player = "";
var audio1 = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3");
var audio2 = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3");
var audio3 = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3");
var audio4 = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3");

$('.start').click(function(){
  SeriesFunc();
});
function SeriesFunc() {
  if (turn === 1) {
    random = Math.floor(Math.random()*4+1);
    series.push(random);
    
    for (i=0; i<series.length; i++) {
      (function(i){
          setTimeout(function(){
            player = "audio" + series[i];
            eval(player).play();
            $(".box:nth-child("+ series[i] +")").animate({
                    opacity: 0.25
            }, 100);
           }, 1000 *(i+1) );
           setTimeout(function(){
            $(".box:nth-child("+ series[i] +")").animate({
                    opacity: 1
            }, 100);
           }, 1000 *(i+1) + 200 );
        }(i));
      }
      turn = 0;
} 
};  
  
  $(".box").click(function() {
    if (turn === 0) {
  tip = Array.from(this.parentNode.children).indexOf(this) +1;
  guess.push(tip);
  player = "audio" + tip;
  eval(player).play();    
  $(".box:nth-child("+ tip +")").animate({
                    opacity: 0.25
            }, 100);
         
   setTimeout(function(){
    $(".box:nth-child("+ tip +")").animate({
                    opacity: 1
    }, 100);
   }, 200 );
  if (guess.join() == series.join()) {
    
      counter += 1;
      $(".counter").html(counter);
    if (counter === 20) {
        setTimeout(function(){
        alert("Congratulations! You are the lucky winner of an iPhone 10");
        clear();
    
    
    },500);
    }
    turn = 1;
    guess = [];
    SeriesFunc();
    
  } else if (guess[guess.length-1] !== series[guess.length-1]) {
    if (!$(".strict-mode-checkbox").prop('checked')) {
    setTimeout(function(){alert("Oh-oh! Try again!")},500);
    guess = [];
  }  else if ($(".strict-mode-checkbox").prop('checked')) {
    setTimeout(function(){
      alert("Oh-oh! You need to start again from the beginning");
      clear();
    },500);
    
  }
  }
  }
});

function clear() {
  random = 0;
 tip = 0;
 series = [];
 guess = [];
 turn = 1;
 counter = 0;
 $(".counter").html("-");
}

$(".clear").click(function() {
 clear();
});

