// document.querySelector("button").addEventListener("click",handleclick);
//
// function handleclick()
// {
//   alert("I got clicked");
// }


// numberOfButtons int
var numberOfButtons=document.querySelectorAll(".drum").length;


for(var i=0;i<numberOfButtons;i++)
{
  document.querySelectorAll(".drum")[i].addEventListener("click",function(){
  var buttonInnerHTML=this.innerHTML;
  makesound(buttonInnerHTML);
  makeAnimation(buttonInnerHTML);

  });
}


document.addEventListener("keydown",function(event)
{
  makesound(event.key);
  makeAnimation(event.key);
});

function makesound(key)
{
  switch(key)
  {
    case "w":
      var w=new Audio("sounds/crash.mp3");
      w.play();
      break;

    case "a":
      var a=new Audio("sounds/kick-bass.mp3");
      a.play();
      break;

    case "s":
      var s=new Audio("sounds/snare.mp3");
      s.play();
      break;

    case "d":
      var d=new Audio("sounds/tom-1.mp3");
      d.play();
      break;

    case "j":
      var j=new Audio("sounds/tom-2.mp3");
      j.play();
      break;

    case "k":
      var k=new Audio("sounds/tom-3.mp3");
      k.play();
      break;

    case "l":
      var l=new Audio("sounds/tom-4.mp3");
      l.play();
      break;

      case "W":
        var w=new Audio("sounds/crash.mp3");
        w.play();
        break;

      case "A":
        var a=new Audio("sounds/kick-bass.mp3");
        a.play();
        break;

      case "S":
        var s=new Audio("sounds/snare.mp3");
        s.play();
        break;

      case "D":
        var d=new Audio("sounds/tom-1.mp3");
        d.play();
        break;

      case "J":
        var j=new Audio("sounds/tom-2.mp3");
        j.play();
        break;

      case "K":
        var k=new Audio("sounds/tom-3.mp3");
        k.play();
        break;

      case "L":
        var l=new Audio("sounds/tom-4.mp3");
        l.play();
        break;
    default:
      console.log(buttonInnerHTML);

  }

}

function makeAnimation(currentKey)
{
  var  activeButton=document.querySelector('.'+currentKey);
  activeButton.classList.add("pressed");

  setTimeout(function(){

    activeButton.classList.remove("pressed");
  },100);
}






// var audio=new Audio("sounds/1.mp3");
// audio.play();









// var numberOfButtons=document.querySelectorAll(".drum").length;
//
//
// for(var i=0;i<numberOfButtons;i++)
// {
//   document.querySelectorAll(".drum")[i].addEventListener("click",function(){
//   var buttonInnerHTML=this.innerHTML;
//
//   switch(buttonInnerHTML)
//   {
//     case "w":
//       var w=new Audio("sounds/crash.mp3");
//       w.play();
//       break;
//
//     case "a":
//       var a=new Audio("sounds/kick-bass.mp3");
//       a.play();
//       break;
//
//     case "s":
//       var s=new Audio("sounds/snare.mp3");
//       s.play();
//       break;
//
//     case "d":
//       var d=new Audio("sounds/tom-1.mp3");
//       d.play();
//       break;
//
//     case "j":
//       var j=new Audio("sounds/tom-2.mp3");
//       j.play();
//       break;
//
//     case "k":
//       var k=new Audio("sounds/tom-3.mp3");
//       k.play();
//       break;
//
//     case "l":
//       var l=new Audio("sounds/tom-4.mp3");
//       l.play();
//       break;
//
//     default:
//       console.log(buttonInnerHTML);
//
//   }
//
//
//
//   });
// }
