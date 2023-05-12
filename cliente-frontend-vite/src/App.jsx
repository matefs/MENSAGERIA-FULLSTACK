import { useState, useEffect } from "react";
import io from "socket.io-client";

function App() {
  const [mensagem, setMensagem] = useState("");

  var socket;
  
  useEffect(() => {
    socket = io("http://localhost:3000");

    // escutando a mensagem enviada pelo servidor
    socket.on("mensagemParaCliente", (mensagem) => {
      setMensagem(mensagem);
    });

    socket.on('transmissaoMensagem',(mensagem) => {
      document.write('Essa mensagem foi transmitida de um cliente para todo o resto \n' + mensagem)
    })

    // enviando uma mensagem para o servidor
    socket.emit("mensagemParaServidor", "Olá, servidor Socket.io!");
  }, []);

  const teste =  function (){
    socket.emit('transmitirOutrosClientes','Foi clicado na tela')
  }

  return (
    <div>
      <p onClick={teste}>Mensagem recebida do servidor: {mensagem}</p>
    </div>
  );
}

export default App;
