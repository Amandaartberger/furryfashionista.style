/* globals dragElement */
dragElement(document.getElementById("bow"));
dragElement(document.getElementById("yellowbow"));
dragElement(document.getElementById("greenbow"));
dragElement(document.getElementById("bluegreenshirt"));
dragElement(document.getElementById("blackskirt"));
dragElement(document.getElementById("blackjumpsuit"));
dragElement(document.getElementById("strumpbyxor"));
dragElement(document.getElementById("silverskirt"));
dragElement(document.getElementById("redtanktop"));
dragElement(document.getElementById("pinkskirt"));
dragElement(document.getElementById("pinkshirtheart"));
dragElement(document.getElementById("pinkbroch"));
dragElement(document.getElementById("cloudboots"));
dragElement(document.getElementById("cloudshirt"));
dragElement(document.getElementById("purpleshoe"));
dragElement(document.getElementById("orangeshoe"));
dragElement(document.getElementById("yellowshirt"));
dragElement(document.getElementById("greentanktop"));
dragElement(document.getElementById("greenboot"));
dragElement(document.getElementById("greenjumpsuit"));
dragElement(document.getElementById("blueshirtcloud"));
dragElement(document.getElementById("bluebroch"));
dragElement(document.getElementById("greenhead"));

function dragElement(elmnt) {
  var pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
  elmnt.onmousedown = dragMouseDown;

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = elmnt.offsetTop - pos2 + "px";
    elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
