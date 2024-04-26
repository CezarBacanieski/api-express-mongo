import express from "express";
import conectDatabase from "./config/dbConnect.js";
import book from "./models/book.js";

const conect = await conectDatabase();

conect.on("error", (erro) => {
  console.error("conection error", erro);
});

conect.once("open", () => {
  console.log("conection with de data succed");
});
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("Course of Node.js");
});

app.get("/books", async (req, res) => {
  const listBooks = await book.find({});
  res.status(200).json(listBooks);
});

app.get("/books/:id", (req, res) => {
  const index = searchBook(req.params.id);
  res.status(200).json(books[index]);
});

app.post("/books", (req, res) => {
  books.push(req.body);
  res.status(201).send("Book cadastred with succed");
});

app.put("/books/:id", (req, res) => {
  const index = searchBook(req.params.id);
  books[index].title = req.body.title;
  res.status(200).json(books);
});

app.delete("/books/:id", (req, res) => {
  const index = searchBook(req.params.id);
  books.splice(index, 1);
  res.status(200).send("Book removed");
});

export default app;
