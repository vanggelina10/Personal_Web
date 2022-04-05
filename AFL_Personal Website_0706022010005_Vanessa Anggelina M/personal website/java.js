$(document).ready(function (){
  $(window).scroll(function (){
    if(this.scrollY > 20){
      $("header").addClass("shadow");
    } else{
      $("header").removeClass("shadow");
    }
    if(this.scrollY >500){
      $(".backtotop").addClass("show");
    }else{
      $(".backtotop").removeClass("show");
    }
  });
  $(".backtotop").click(function (){
    $("html").animate({scrollTop:0});
  });
});


