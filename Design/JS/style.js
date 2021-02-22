/*Theme Mode Setting*/
let themeMode = sessionStorage.getItem("themeMode");

$("#dark-toggle").click(
  function(){
  $('body').removeClass('light');
  $('body').addClass('dark');

  sessionStorage.setItem("themeMode", 'dark');

})

$("#light-toggle").click(
  function(){
  $('body').removeClass('dark');
  $('body').addClass('light');

  sessionStorage.setItem("themeMode", 'light');

})

if(themeMode == null){
  sessionStorage.setItem("themeMode", 'dark'); //set default themeMode
  }
  
if(themeMode == 'light'){
  $('body').addClass('light');
  $('body').removeClass('dark');
    sessionStorage.setItem("themeMode", 'light');

}

if(themeMode == 'dark'){
  $('body').addClass('dark');
  $('body').removeClass('light');
    sessionStorage.setItem("themeMode", 'dark');

}


//document ready
$(function () {

    //if mobile burger menu clicked
    $('#toggle').click(function () {
        $(this).toggleClass('active');
        $('#overlay').toggleClass('open');
    });


});

/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementsByClassName("navbar0").style.top = "0";
  } else {
    document.getElementsByClassName("navbar0").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}