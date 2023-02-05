import Math from './math.js';

includeHTML()

def getBackgroundColor(){
  colors = { "red": "#FF0000", "green": "#00FF00", "blue": "#0000FF", "yellow": "#FFFF00", "orange": "#FF6600", "purple": "#800080", "pink": "#FF00FF", "brown": "#A52A2A", "grey": "#808080" };

  return colors[Math.floor(Math.random() * colors.length)];
  // const random = Math.floor(Math.random() * colors.length);
  // return colors[random];
}

$(function () {
  var includes = $('[data-include]')
  $.each(includes, function () {
    var file = 'content/' + $(this).data('include') + '.html'
    $(this).load(file)
  })
})

function includeHTML(): void {
  var z, i, elmnt, file, xhttp;
  /* Loop through a collection of all HTML elements: */
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("content");
    if (file) {
      /* Make an HTTP request using the attribute value as the file name: */
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) { elmnt.innerHTML = this.responseText; }
          if (this.status == 404) { elmnt.innerHTML = "Page not found."; }
          /* Remove the attribute, and call this function once more: */
          elmnt.removeAttribute("content");
          includeHTML();
        }
      }
      xhttp.open("GET", file, true);
      xhttp.send();
      /* Exit the function: */
      return;
    }
  }
}


