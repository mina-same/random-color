$(document).ready(function () {
  // generate random color on botton click
  $(".generate-btn").on("click",function(){
    var randomColor = "";
    var characters = "0123456789abcdef";

    // run for loop to generate color randomely
    for(i=0 ; i<6 ; i++){
      randomColor=randomColor+characters[Math.floor(Math.random()*characters.length)];
    }
    
    console.log(randomColor);
    // add hex color code to input field 
    $("#inputField").val("#"+randomColor) ;
    $("#inputField").css("color","#"+randomColor);
    $("#inputField").css("border-color","#"+randomColor);
    $(".input-box button").css("backgroundColor","#"+randomColor)
    $(".alart-msg .code").css("color","#"+randomColor);
    $(".color-preview").css("backgroundColor","#"+randomColor);
  });

  // create two function to add and remove the animation class on alrt msg
  function add(){
    $(".alart-msg").addClass("slide-effect")
  }
  function remove(){
    $(".alart-msg").removeClass("slide-effect")
  }

  // copy color code 
  $(".copy-btn").on("click",function (){
    $("#inputField").select();
    add();
    document.execCommand("copy");
    setInterval(remove,4000);
    $(".alart-msg .code").text( $("#inputField").val() );
  });
});