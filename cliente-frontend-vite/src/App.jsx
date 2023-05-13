import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import { Alert, Space } from 'antd';


function SocketIODemo() {
  const socket = io("http://localhost:3000");

  const notification = {
  usuarioNotificacao: "Mateus",
  dataCriacao: new Date(),
  conteudo: {
    titulo: "Titulo da notificacao",
    descricao: "Esta notificacao foi enviada de um cliente para todos outros",
  },
  origem: "Cliente web React",
  foiLida: false,
  categoria: "info"
  };
  

  const [existeMensagem, setExisteMensagem ] = useState({
    usuarioNotificacao: "",
    dataCriacao: "",
    conteudo: {
      titulo: "",
      descricao: "",
    },
    origem: "",
    foiLida: false,
    categoria: "", 
  })

  useEffect(() => {
    socket.on("connect", () => {
      console.log("Connected to server");
    });
    
  }, []);

  socket.on("messageBroadcast", (message) => {
  //alert(message.conteudo.descricao)

  setExisteMensagem({ 
    ...message
  })

  }); // fim recebimento messageBraodcast

  const handleSubmit = () => {
    socket.emit("messageBroadcast", notification);
  };

  return (
    <div>

<div id="centralizador">
      <button onClick={handleSubmit}>Notificar outros usuarios</button>
</div>

  <Space direction="horizontal" style={{ width: '50%' }}> 
 { existeMensagem.conteudo.titulo !=  "" && <Alert
      message={existeMensagem.conteudo.titulo}
      description={existeMensagem.conteudo.descricao}
      type={existeMensagem.categoria}
      showIcon 
    /> }
  </Space>

    </div>
  );
}

export default SocketIODemo;
