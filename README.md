<h1 align="center">
    <img 
    alt="Bootcamp GoStack Rocketseat"
    src="https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/bootcamp-header.png" 
    width="200px" />
</h1>

<h3 align="center">
  Módulo 01 - Conceitos do NodeJS
</h3>

<blockquote align="center">"Muito a aprender você ainda tem. - Mestre Yoda”</blockquote>

<blockquote align="center">
  <a href="#rocket-sobre-o-projeto">Sobre o módulo</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#conceitos-abordados">Conceitos abordados</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#tutorial">Tutorial</a>
</blockquote>

## :rocket: Sobre o módulo

Esse módulo foi principalmente feito para servir como base para os próximos módulos com NodeJS, ensinando conceitos fundamentais para uma boa jornada no desenvolvimento do backend.

### :clipboard: Conceitos abordados

- `Rotas`: Rotas, é por onde principalmente as requisições vão acontecer, neste módulo também é abordado alguns conceitos do node que explicam de forma técnica como funcionam as rotas, e como a "Call Stack" funciona, com eventos em loop sempre "ouvindo" as rotas e fazendo com que as funções funcionem em forma de pilha. `Rotas no projeto:`
-- `GET /users` - Lista todos os usuários
-- `GET /users/:id` - Lista um usuário específico
-- `POST /users`  - Cria um usuário
-- `PUT /users/:id` - Edita o usuário especificado
-- `DELETE /users/:id` - Deleta o usuário especificado

- `Middlewares`: Middlewares são principalmente, formas de regular e manipular as requisições, podendo alterar os dados retornados na resposta. Exemplos usados no projeto:
```
function checkUserExists( req, res , next) {
  const name = req.body.name
  if(!name) {
    return res.status(400).json({error : "Name is required"})
  }
  next()
}
```
```
function checkUserInArray( req, res , next) {
  const user = users[req.params.index]
  if(!user) {
    return res.status(404).json({error : "User not found"})
  }
  req.user = user
  next()
}
```


### :question: Tutorial: Como rodar o projeto?

- Com node e npm (ou yarn) instalado, use npm install (yarn) e depois npm run dev(yarn dev) para iniciar o servidor.
---

Feito com :purple_heart: by araujooj :wave: