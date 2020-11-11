let socket = io();

socket.on("connect", newConnection); //quando mi connetto, chiama funzione newConnection
socket.on("mouseBroadcast", drawOtherMouse); //quando arriva messaggio "mouseBroadcast", drawOtherMouse()

function newConnection(){
  console.log("your ID: " + socket.id) //mostra mio codice connessione
}

function drawOtherMouse(data){  //disegna ellissi di altri client
  fill("yellow");
  ellipse(data.x, data.y, 10)
}

function preload(){
}

function setup() {
  createCanvas(windowWidth,windowHeight)

  background("red")
}

function draw() {
}

function mouseMoved(){
  fill("black");
  ellipse(mouseX, mouseY, 20);
  //crea messaggio
  let message = {
    x: mouseX,
    y: mouseY
  };
  //send to the server
  socket.emit("mouse", message);
}
