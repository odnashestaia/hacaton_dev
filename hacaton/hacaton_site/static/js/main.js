/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
let dropdownWidth = document.querySelector(".dropbtn");
console.log(dropdownWidth.clientWidth);
let myDropdown = document.querySelector("#myDropdown");
console.log(myDropdown.clientWidth);
myDropdown.style.width = dropdownWidth + "px";
console.log(myDropdown.clientWidth);
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown .clientWidthclicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};
