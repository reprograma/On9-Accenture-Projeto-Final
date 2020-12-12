const Book = require("../models/Livros")

const validatingPost = async (title, author) => {
    const bookValid = await Book.find({ $and: [{ title: title }, { author: author }] });
    return bookValid.length
}
