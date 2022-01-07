var button_audio=new Audio("https://monoame.com/awi_class/ballsound/click14.wav");

$(".i5").click(function(){
  $(".phone").css("width","");
  $(".screen").css("height","");
  $(".phonename").text($(this).text());
  button_audio.play();
});
$(".i5s").click(function(){
  $(".phone").css("width","250px");
  $(".screen").css("height","420px");
  $(".phonename").text($(this).text());
  button_audio.play();
});
$(".i6").click(function(){
  $(".phone").css("width","270px");
  $(".screen").css("height","440px");
  $(".phonename").text($(this).text());
  button_audio.play();
});
$(".i6s").click(function(){
  $(".phone").css("width","300px");
  $(".screen").css("height","480px");
  $(".phonename").text($(this).text());
  button_audio.play();
});

// 音檔擷取
var screen_audio=new Audio("https://monoame.com/awi_class/ballsound/click18.wav");
// 音檔擷取

var page=0;
$(".screen").click(function(){
  page+=1
  if(page>2){
    page=0;
  }
  $(".pages").css("left","-"+page*100+"%");
  screen_audio.play();
});

var home_audio=new Audio("Ahh.wav");
$(".button").click(function(){
  page=0;
  $(".pages").css("left","-"+page*100+"%");
  home_audio.play();
});

var turn=0;
$(".turn").click(function(){
  turn+=1;
  if(turn>2){
    turn=0;
  }
  $(".phone").css("transform","rotate("+360*turn+"deg)");
});

var wiggle_audio=new Audio("https://monoame.com/awi_class/ballsound/phonevi.mp3");
var wiggle=12;
$(".wiggle").click(function(){
  wiggle= 0;
  wiggle_audio.play();
});
setInterval(function(){
    if(wiggle<=11){
      wiggle+=1;
      if(wiggle%2==0){
        $(".phone").css("left","-30px");
      } else if(wiggle%2==1){
        $(".phone").css("left","30px");
      }
    if(wiggle==12){
      $(".phone").css("left","");
      }
    }
},60)