// importando a biblioteca do Socket.io
const io = require("socket.io")(3000, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"]
  }
});

// escutando a conexão de um cliente
io.on("connection", (socket) => {
  console.log("Novo cliente conectado!");
 
  // enviando uma mensagem para o cliente conectado
  socket.emit("mensagemParaCliente", "Bem-vindo ao servidor Socket.io!");

  // escutando a mensagem enviada pelo cliente
  socket.on("mensagemParaServidor", (mensagem) => {
    console.log(`Mensagem recebida do cliente: ${mensagem}`);
  });

  // broadcast 
  socket.on('transmitirOutrosClientes',(mensagem) => {
    socket.broadcast.emit('transmissaoMensagem', mensagem);
  })
});
