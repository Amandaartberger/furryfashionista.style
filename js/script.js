
const score = document.querySelector("#score");
const fills = document.querySelectorAll(".drag");
const targets = document.querySelectorAll("#target");

let scoreCount = 0;
let dragged;

// Fill listeners
for (const fill of fills) {
  fill.addEventListener("dragstart", dragStart);
  fill.addEventListener("dragend", dragEnd);
}

// Loop through empty boxes and add listeners
for (const target of targets) {
  target.addEventListener("dragover", dragOver);
  target.addEventListener("dragenter", dragEnter);
  target.addEventListener("dragleave", dragLeave);
  target.addEventListener("drop", dragDrop);
}

// Drag Functions

function dragStart() {
  dragged = event.target;
}

function dragEnd() {
  this.className = "fill";
}

function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();
  this.classList.add("hovered");
}

function dragLeave() {
  this.className = "empty";
}

function dragDrop(event) {
  score.innerHTML = ++scoreCount;
  this.append(dragged);
}
