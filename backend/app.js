import express from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";

const app = express();
const port = 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:5173",
    optionsSuccessStatus: 200,
  })
);

const prisma = new PrismaClient();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/night", (req, res) => {
  res.send("Good Night! Good Night Good Night!!");
});

// Note: todo作成API
app.post("/todo", async (req, res) => {
  console.log("req.body", req.body);
  const { title, done, limitDate } = req.body;
  const todo = await prisma.todo.create({
    data: {
      title,
      done,
      limitDate: new Date(limitDate),
    },
  });
  console.log("todo", todo);
  res.json(todo);
});

// Note: todo更新API
app.put("/todo", async (req, res) => {
  console.log("req.body", req.body);
  const { id, title, done, limitDate } = req.body;
  const updatedTodo = await prisma.todo.update({
    where: {
      id: Number(id),
    },
    data: {
      title,
      done,
      limitDate: new Date(limitDate),
    },
  });
  console.log("updatedTodo", updatedTodo);
  res.json(updatedTodo);
});

// Note: todo1件取得API
app.get("/todo/:id", async (req, res) => {
  const { id } = req.params;
  const todo = await prisma.todo.findUnique({
    where: {
      id: Number(id),
    },
  });
  res.json(todo);
});

// Note: todo全件取得API
app.get("/todos", async (req, res) => {
  const todos = await prisma.todo.findMany();
  res.json(todos);
});

// Note: todo1件取得API
app.delete("/todo/:id", async (req, res) => {
  const { id } = req.params;
  const todo = await prisma.todo.delete({
    where: {
      id: Number(id),
    },
  });
  res.json(todo);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
