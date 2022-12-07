const express = require("express");
const cors = require("cors");

const { v4: uuidv4 } = require("uuid");

const app = express();

app.use(cors());
app.use(express.json());

const users = [];

function findUser(array, name, username) {
  return array.find((user) => user.name === name && user.username === username)
}

function checksExistsUserAccount(request, response, next) {
  // Complete aqui
}

app.post("/users", (request, response) => {
  const { name, username } = request.body;

  const userExist = findUser(users, name, username)
  if (userExist) return response.status(400).json({ error: "User already exists!" });

  const newUser = { id: uuidv4(), name, username, todos: [] };
  users.push(newUser);

  const user = findUser(users, name, username)
  if (!user) return response.status(500).json({ error: "Internal error" });

  response.status(201).json(user);
});

app.get("/todos", checksExistsUserAccount, (request, response) => {
  // Complete aqui
});

app.post("/todos", checksExistsUserAccount, (request, response) => {
  // Complete aqui
});

app.put("/todos/:id", checksExistsUserAccount, (request, response) => {
  // Complete aqui
});

app.patch("/todos/:id/done", checksExistsUserAccount, (request, response) => {
  // Complete aqui
});

app.delete("/todos/:id", checksExistsUserAccount, (request, response) => {
  // Complete aqui
});

module.exports = app;
