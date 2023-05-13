import React, { useState, useEffect } from "react";
import io from "socket.io-client";

function SocketIODemo() {
  const socket = io("http://localhost:3000");

  const notification = {
  id: 1,
  usuarioNotificacao: "Mateus",
  dataCriacao: new Date(),
  conteudo: {
    titulo: "Titulo da notificacao",
    descricao: "Esta notificacao foi enviada de um cliente para todos outros",
  },
  origem: "Cliente web React",
  estado: "Não lida",
  categoria: "Informativo"
  };
  
  useEffect(() => {
    socket.on("connect", () => {
      console.log("Connected to server");
    });
    
  }, []);

  socket.on("messageBroadcast", (message) => {
  alert(message.conteudo.descricao)
  });

  const handleSubmit = () => {
    socket.emit("messageBroadcast", notification);
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
