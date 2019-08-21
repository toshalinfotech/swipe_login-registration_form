$(document).ready(function(){
    $(".sign-up").hide();
    
    $("#img-btn1").click(function(){
    $(".white").addClass("white-right");
    $(".right").addClass("right-translate");
    $(".left").addClass("left-translate");
    $(".sign-up").show();
    $(".sign-in").hide();
    });
    $("#img-btn2").click(function(){
    $(".white").removeClass("white-right");
    $(".right").removeClass("right-translate");
    $(".left").removeClass("left-translate");
    $(".sign-up").hide();
    $(".sign-in").show();
    });
    });