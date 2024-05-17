var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active"); // Toggles the "active" class on the button

    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null; // Close the panel
      setTimeout(function(){ panel.style.display = 'none'; }, 300); // Ensure display is none after transition
    } else {
      panel.style.display = "block"; // Ensure panel is set to block before the transition
      setTimeout(() => {
        panel.style.maxHeight = panel.scrollHeight + "px"; // Open the panel
      }, 0); // Ensure maxHeight is set after display block
    }
  });
}