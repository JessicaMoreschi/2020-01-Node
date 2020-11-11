let socket = io();

socket.on("connect", newConnection); //quando mi connetto, chiama funzione newConnection

function newConnection(){
  console.log("your ID: " + socket.id) //mostra mio codice connessione
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
  ellipse(mouseX, mouseY, 20);
  //crea messaggio
  let message = {
    x: mouseX,
    y: mouseY
  };
  //send to the server
  socket.emit("mouse", message);
}
