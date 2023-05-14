import React, { useState, useEffect, useRef } from "react";
import io from "socket.io-client";
import { Alert } from 'antd';


function SocketIODemo() {
//  var socket = io("http://localhost:3000");
  var socket = useRef(null) 

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
    ativa: false
  })

  useEffect(() => { 
  socket.current = io("http://localhost:3000");
  
  socket.current.on("connect", () => {
    console.log("Connected to server");
  });

  
  socket.current.on("messageBroadcast", (message) => {
  //alert(message.conteudo.descricao)
  setExisteMensagem({ 
    ...message,
    ativa: true
  })

  }); 

 
  }, []);

/*   socket.on("messageBroadcast", (message) => {
  //alert(message.conteudo.descricao)
  setExisteMensagem({ 
    ...message,
    ativa: true
  })

  });  */

  const handleSubmit = () => { 
    socket.current.emit("messageBroadcast", notification); 
  };

  return (
    <div>

<div id="centralizador">
      <button onClick={handleSubmit}>Notificar outros usuarios</button>
</div>

  <div style={{ width: '50%', position: 'fixed', bottom: 10, left: 0 }}> 

 { existeMensagem.ativa == true && <Alert
      message={existeMensagem.conteudo.titulo}
      description={existeMensagem.conteudo.descricao}
      type={existeMensagem.categoria}
      showIcon 
      onClick={() => setExisteMensagem({
      ...existeMensagem,
      ativa: false
    }) }
    style={{cursor:'pointer'}}

    /> }
  </div>

    </div>
  );
}

export default SocketIODemo;
