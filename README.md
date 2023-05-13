### Mensageria Fullstack


#### Formato da mensagem (retornado do banco de dados): 
```json 

{
  "id": 1,
  "usuarioNotificacao": "John Doe",
  "dataCriacao": "2023-05-13T12:00:00Z",
  "conteudo": "This is a notification message.",
  "origem": "System",
  "estado": "Aguardando",
  "categoria": "Informacao"
}

```

- Observação: O id da mensagem só é criado quando ela é cadastrada no `banco de dados`. Ao enviar a solicitação para transmitir e então criar a mensagem, ela fica no formato: 

```json
{
  "usuarioNotificacao": "John Doe",
  "dataCriacao": "2023-05-13T12:00:00Z",
  "conteudo": "This is a notification message.",
  "origem": "System",
  "estado": "Aguardando",
  "categoria": "Informacao"
}

```