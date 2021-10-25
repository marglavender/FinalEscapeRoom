//button that opens the modal
var btn = document.getElementById("myBtn");

//the modal
var modal = document.getElementById("myModal");

//the image is inserted inside the modal
var btn = document.getElementById("myBtn");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
btn.onclick = function(){
  modal.style.display = "block";
  modalImg.src = "https://marglavender.github.io/EscapeRoomNarrative/Map.jpg";
  captionText.innerHTML = this.alt;
}

//closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}

function riddle() {
   var password = document.getElementById("passwordBox");
   var passwordText = password.value;
   if(passwordText == "eyepatch") {
    return true;
   }
   alert("Access denied! Incorrect password!");
   return false;
   }