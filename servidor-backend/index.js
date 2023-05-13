const express = require("express");
const socketio = require("socket.io");
const cors = require("cors");

const app = express();
const server = app.listen(3000, () => {
  console.log("Server listening on port 3000");
});

const io = socketio(server, {
  cors: {
    origin: "*",
  },
});
  

var connectedClients = [] 
io.on("connection", (socket) => {
  console.log("New client connected", socket.client.id);
  connectedClients.push(socket);
 

  socket.on('messageBroadcast',(mensagem) => socket.broadcast.emit('messageBroadcast', mensagem))

  socket.on("disconnect", () => {
      console.log("Client disconnected");
    });



});
 


