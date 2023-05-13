### Mensageria Fullstack

![mostrando mensageria fullstack](https://github.com/matefs/MENSAGERIA-FULLSTACK/assets/30128774/6eada3ec-7a8b-4504-ab56-86bfbccc9c1c)

#### Formato da mensagem (retornado do banco de dados): 
```json 

{
  "id": 1,
  "usuarioNotificacao": "John Doe",
  "dataCriacao": "2023-05-13T12:00:00Z",
  "conteudo": {
    "titulo": "My Notification Title",
    "descricao": "This is a notification message description.",
  },
  "origem": "System",
  "foiLida": false,
  "categoria": "Informacao"
}

```

- Observação: O id da mensagem só é criado quando ela é cadastrada no `banco de dados`. Ao enviar a solicitação para transmitir e então criar a mensagem, ela fica no mesmo formato, porém sem id.
 

