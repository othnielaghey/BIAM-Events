// Get the modal
var modal1 = document.getElementById("whatwedo1");
var modal2 = document.getElementById("whatwedo2");
var modal3 = document.getElementById("whatwedo3");
var modal4 = document.getElementById("whatwedo4");

// Get the button that opens the modal
var btn1 = document.getElementById("myBtn1");
var btn2 = document.getElementById("myBtn2");
var btn3 = document.getElementById("myBtn3");
var btn4 = document.getElementById("myBtn4");

// When the user clicks on the button, open the modal
btn1.onclick = function () {
  modal1.style.display = "block";
}
btn2.onclick = function () {
  modal2.style.display = "block";
}
btn3.onclick = function () {
  modal3.style.display = "block";
}
btn4.onclick = function () {
  modal4.style.display = "block";
}

// Get the <span> element that closes the modal
var close1 = document.getElementById("close1");
var close2 = document.getElementById("close2");
var close3 = document.getElementById("close3");
var close4 = document.getElementById("close4");

// When the user clicks on <span> (x), close the modal
close1.onclick = function () {
  modal1.style.display = "none";
}
close2.onclick = function () {
  modal2.style.display = "none";
}
close3.onclick = function () {
  modal3.style.display = "none";
}
close4.onclick = function () {
  modal4.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal1 | event.target == modal2 | event.target == modal3 | event.target == modal4) {
    modal1.style.display = "none";
    modal2.style.display = "none";
    modal3.style.display = "none";
    modal4.style.display = "none";
  }
}