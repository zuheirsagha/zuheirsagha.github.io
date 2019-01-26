window.onload=function(){
  document.getElementById("menu").addEventListener ("click", myFunction, false);
}

function myFunction() {
  var navBar = document.getElementById("myTopnav");

  if (navBar.classList) {
    navBar.classList.toggle("responsive");
  } else {
    // For IE9
    var classes = navBar.className.split(" ");
    var i = classes.indexOf("responsive");

    if (i >= 0)
      classes.splice(i, 1);
    else
      classes.push("responsive");
      navBar.className = classes.join(" "); 
  }
}
