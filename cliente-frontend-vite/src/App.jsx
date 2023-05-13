import React, { useState, useEffect } from "react";
import io from "socket.io-client";

function SocketIODemo() {
  const socket = io("http://localhost:3000");

  useEffect(() => {
    socket.on("connect", () => {
      console.log("Connected to server");
    });
    
  }, []);
  

  socket.on("messageBroadcast", (message) => {
  alert(message)
  });

  const handleSubmit = () => {
    socket.emit("messageBroadcast", "Mensagem primeiro cliente");
  };

  return (
    <div>

<div id="centralizador">
      <button onClick={handleSubmit}>Notificar outros usuarios</button>
</div>

    </div>
  );
}

export default SocketIODemo;
