import { author } from "../models/author.js";

class AuthorController {
  static async listAuthor(req, res) {
    try {
      const listAuthors = await author.find({});
      res.status(200).json(listAuthors);
    } catch (e) {
      res.status(500).json({ message: `${e.message} - fail on the request` });
    }
  }

  static async listAuthorForId(req, res) {
    try {
      const id = req.params.id;
      const findOutAuthor = await author.findById(id);
      res.status(200).json(findOutAuthor);
    } catch (e) {
      res
        .status(500)
        .json({ message: `${e.message} - fail on the author request` });
    }
  }

  static async registerAuthor(req, res) {
    try {
      const newAuthor = await author.create(req.body);
      res
        .status(201)
        .json({ message: "author cadastred with succed", author: newAuthor });
    } catch (erro) {
      res
        .status(500)
        .json({ message: `${erro.message} - Failed to register the author` });
    }
  }

  static async updateAuthor(req, res) {
    try {
      const id = req.params.id;
      await author.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: "author updated" });
    } catch (e) {
      res.status(500).json({ message: `${e.message} - fail in the update` });
    }
  }

  static async deleteAuthor(req, res) {
    try {
      const id = req.params.id;
      await author.findByIdAndDelete(id);
      res.status(200).json({ message: "author deleted" });
    } catch (e) {
      res
        .status(500)
        .json({ message: `${e.message} - fail in delete the author` });
    }
  }
}

export default AuthorController;
