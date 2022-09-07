console.log("virker det?");


/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction1() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


 /* Newsletter alert*/
 function myFunction() {
  let text;
  let person = prompt("Please enter your e-mail:", "myname@mail.com");
  if (person == null || person == "") {
    text = "Please try again.";
  } else {
    text = "Thank you for signing up with you email " + person + ". We are looking forward to keeping you updated on our products and community!";
  }
  document.getElementById("news").innerHTML = text;
}

/* Tag gallery */
function myFunction3 (imgs) {
  var expandImg = document.getElementById("expandedImg");
  var imgText = document.getElementById("imgtext");
  expandImg.src = imgs.src;
  imgText.innerHTML = imgs.alt;
  expandImg.parentElement.style.display = "block";
}

/* scroll up */
let mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
