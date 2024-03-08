//Scroll Top Button

// Get the button:
let mybutton = document.getElementById("myBtn");
let form = document.getElementById("form");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  console.log("[ topFunction ]");
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


function onClickSubmitEmail() {
  let email = form.elements[0].value;
  console.log("[ onClickSubmitForm ] email: ", email);
  if (email === "") {
    window.alert("Where's the email ma dude?");
    return 
  }
  window.alert("WE HAVE YOUR EMAIL NOW MUAHAHAHAHAHA\nIt is: " + email);

  
}




