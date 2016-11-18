var namespace = "http://www.w3.org/2000/svg"
var turn = "player1"
function doSomethingPatricia() {
   var newShape = document.createElementNS(namespace, "circle")
 newShape.setAttribute("cx", 60)
 newShape.setAttribute("cy", 50)
 newShape.setAttribute("r", 30)
 if (turn == "player1"){
   newShape.setAttribute("fill", "skyblue")
   turn = "player2"
 }else{
   newShape.setAttribute("fill", "yellow")
   turn = "player1"
 }
 var canvas = document.getElementById("game-board")
canvas.appendChild(newShape)
}

function doSomethingPatrici() {
  var newShape = document.createElementNS(namespace, "circle")
newShape.setAttribute("cx", 60)
newShape.setAttribute("cy", 145)
newShape.setAttribute("r", 30)
if (turn == "player1"){
  newShape.setAttribute("fill", "skyblue")
  turn = "player2"
}else{
  newShape.setAttribute("fill", "yellow")
  turn = "player1"
}
var canvas = document.getElementById("game-board")
canvas.appendChild(newShape)
}

function doSomethingPatric() {
  var newShape = document.createElementNS(namespace, "circle")
newShape.setAttribute("cx", 60)
newShape.setAttribute("cy", 240)
newShape.setAttribute("r", 30)
if (turn == "player1"){
  newShape.setAttribute("fill", "yellow")
  turn = "player2"
}else{
  newShape.setAttribute("fill", "skyblue")
  turn = "player1"
}
var canvas = document.getElementById("game-board")
canvas.appendChild(newShape)
}

function doSomethingPatri() {
  var newShape = document.createElementNS(namespace, "circle")
newShape.setAttribute("cx", 155)
newShape.setAttribute("cy", 50)
newShape.setAttribute("r", 30)
if (turn == "player1"){
  newShape.setAttribute("fill", "yellow")
  turn = "player2"
}else{
  newShape.setAttribute("fill", "skyblue")
  turn = "player1"
}
var canvas = document.getElementById("game-board")
canvas.appendChild(newShape)
}

function doSomethingPatr() {
  var newShape = document.createElementNS(namespace, "circle")
newShape.setAttribute("cx", 155)
newShape.setAttribute("cy", 145)
newShape.setAttribute("r", 30)
if (turn == "player1"){
  newShape.setAttribute("fill", "yellow")
  turn = "player2"
}else{
  newShape.setAttribute("fill", "skyblue")
  turn = "player1"
}
var canvas = document.getElementById("game-board")
canvas.appendChild(newShape)
}

function doSomething() {
  var newShape = document.createElementNS(namespace, "circle")
newShape.setAttribute("cx", 155)
newShape.setAttribute("cy", 240)
newShape.setAttribute("r", 30)
if (turn == "player1"){
  newShape.setAttribute("fill", "skyblue")
  turn = "player2"
}else{
  newShape.setAttribute("fill", "yellow")
  turn = "player1"
}
var canvas = document.getElementById("game-board")
canvas.appendChild(newShape)
}

function doSomethingPat() {
  var newShape = document.createElementNS(namespace, "circle")
newShape.setAttribute("cx", 245)
newShape.setAttribute("cy", 240)
newShape.setAttribute("r", 30)
if (turn == "player1"){
  newShape.setAttribute("fill", "skyblue")
  turn = "player2"
}else{
  newShape.setAttribute("fill", "yellow")
  turn = "player1"
}
var canvas = document.getElementById("game-board")
canvas.appendChild(newShape)
}

function doSomethingPao() {
  var newShape = document.createElementNS(namespace, "circle")
newShape.setAttribute("cx", 245)
newShape.setAttribute("cy", 50)
newShape.setAttribute("r", 30)
if (turn == "player1"){
  newShape.setAttribute("fill", "yellow")
  turn = "player2"
}else{
  newShape.setAttribute("fill", "skyblue")
  turn = "player1"
}
var canvas = document.getElementById("game-board")
canvas.appendChild(newShape)
}


function doSomethingP() {
  var newShape = document.createElementNS(namespace, "circle")
newShape.setAttribute("cx", 245)
newShape.setAttribute("cy", 145)
newShape.setAttribute("r", 30)
if (turn == "player1"){
  newShape.setAttribute("fill", "skyblue")
  turn = "player2"
}else{
  newShape.setAttribute("fill", "yellow")
  turn = "player1"
}
var canvas = document.getElementById("game-board")
canvas.appendChild(newShape)
}
