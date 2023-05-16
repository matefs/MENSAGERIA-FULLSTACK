### Mensageria Fullstack

![mostrando mensageria fullstack](https://github.com/matefs/MENSAGERIA-FULLSTACK/assets/30128774/d1580a68-3222-4deb-9e90-44217e7ac8aa)

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
  "categoria": "Informacao"
}

```
- Observação: O id da mensagem só é criado quando ela é cadastrada no `banco de dados`. Ao enviar a solicitação para transmitir e então criar a mensagem, ela fica no mesmo formato, porém sem id.
 
Na aplicação front end, foi adicionado dois atributos no objeto da mensagem: 
  - `ativa` para criar a exibição condicional
  - `foiLida` para dizer ao usuario se existem mensagens novas, não lidas
```js
  "ativa": false,
  "foiLida": false,
```
