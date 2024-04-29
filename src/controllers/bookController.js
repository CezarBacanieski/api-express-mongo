import book from "../models/book.js";

class BookController {
  static async listBook(req, res) {
    try {
      const listBooks = await book.find({});
      res.status(200).json(listBooks);
    } catch (e) {
      res.status(500).json({ message: `${e.message} - fail on the request` });
    }
  }

  static async listBookForId(req, res) {
    try {
      const id = req.params.id;
      const findOutBook = await book.findById(id);
      res.status(200).json(findOutBook);
    } catch (e) {
      res
        .status(500)
        .json({ message: `${e.message} - fail on the book request` });
    }
  }

  static async registerBook(req, res) {
    try {
      const newBook = await book.create(req.body);
      res
        .status(201)
        .json({ message: "Book cadastred with succed", book: newBook });
    } catch (erro) {
      res
        .status(500)
        .json({ message: `${erro.message} - Failed to register the book` });
    }
  }

  static async updateBook(req, res) {
    try {
      const id = req.params.id;
      await book.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: "book updated" });
    } catch (e) {
      res.status(500).json({ message: `${e.message} - fail in the update` });
    }
  }

  static async deleteBook(req, res) {
    try {
      const id = req.params.id;
      await book.findByIdAndDelete(id);
      res.status(200).json({ message: "book deleted" });
    } catch (e) {
      res
        .status(500)
        .json({ message: `${e.message} - fail in delete the book` });
    }
  }
}

export default BookController;
