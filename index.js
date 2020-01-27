const express = require("express");

const server = express();

server.use(express.json());

// Query Params = ?users=1
// Route Params = /users/1
// Request params = {"nome": "gabriel", idade: "18"}

// CRUD - Create, Read, Update, Delete
// Formas de manipular a requisição = Middlewares

const users = ["Diego", "Gabriel", "Carlos"];

// Middlewares abaixo
function checkUserExists( req, res , next) {
  const name = req.body.name
  if(!name) {
    return res.status(400).json({error : "Name is required"})
  }
  next()
}
function checkUserInArray( req, res , next) {
  const user = users[req.params.index]
  if(!user) {
    return res.status(404).json({error : "User not found"})
  }
  req.user = user
  next()
}

server.use((req, res, next) => {
  console.log(`A requisição foi chamada, método: ${req.method} e a url: ${req.url}`);
  return next();
});

server.get("/users", checkUserInArray, (req, res) => {
  return res.json({ message: `Buscando os usuario ${users}` });
});

server.get("/users/:index", checkUserInArray, (req, res) => {
  const { index } = req.params; // Aqui é feita a requisição da pessoa, que é passada diretamente pelo URL
  return res.json({ message: `Buscando o usuario ${users[index]}` });
});


server.post("/users",  checkUserExists, (req, res) => {
  const { name } = req.body;
  users.push(name);
  return res.json(users);
});

server.put("/users/:index",checkUserInArray , checkUserExists, (req, res) => {
  const { index } = req.params;
  const { name } = req.body;
  users[index] = name;
  return res.json(users);
});

server.delete("/users/:index", checkUserInArray, (req, res) => {
  const { index } = req.params;

  users.splice(index, 1);
  return res.send();
});
server.listen(3333);
