
$("#light-toggle").click(function() {
    $('body').removeClass();
    $('body').addClass('light');
});

$("#dark-toggle").click(function() {
    $('body').removeClass();
    $('body').addClass('dark');
});

/*nav

(function() {
    var body = document.body;
    var burgerMenu = document.getElementsByClassName('b-menu')[0];
    var burgerNav = document.getElementsByClassName('b-nav')[0];
  
    burgerMenu.addEventListener('click', function toggleClasses() {
      [body, burgerNav].forEach(function (el) {
        el.classList.toggle('open');
      });
    }, false);
  })();
*/

//document ready
$(function () {

    //if mobile burger menu clicked
    $('#toggle').click(function () {
        $(this).toggleClass('active');
        $('#overlay').toggleClass('open');
    });


});