const Book =  require('../models/Book.model')

//methods:   GET
//description : GET all books
const getAllBooks = async (_,res) => {
  try {
    const books = await Book.find()
    res.status(200).json({
      message:'success',
      books:books.reverse()
    })
  } catch (error) {
    res.send(error)
  }
}
` `
//methods:   GET
//description : GET one books by id
const getBooksById  = async (req,res) => {
  try {
    const book  = await Book.findById(req.params.id)
    if(!book) {
      return res.status(404).json({
        message:'Not found'
      })
    }

    return res.status(200).json({
      message:'success',
      book
    })
  } catch (error) {
    res.send(error)
  }
}


//methods:   POST
//description : add new book
const addBook  = async (req,res) => {
  try {
    const {title,description,image} = req.body

    const newBook  = await Book.create({
     title,
     description,
     image
    })

    res.status(201).json({
      message:'success',
      newBook
    })
  } catch (error) {
    res.send(error)
  }
}


//methods:   PUT
//description : edit  book by id 
const  updateBook  = async (req,res) => {
  try {
    const {title,description,image} = req.body

    const updatedBook  = await Book.findByIdAndUpdate(req.params.id, {
      title,
      description,
      image
    })

    res.status(200).json({
      message:'success',
      updatedBook
    })
  } catch (error) {
    res.send(error)
  }
}

//methods:   DELETE
//description : delete book by id 
const  deleteBook  = async (req,res) => {
  try {
     await Book.findByIdAndDelete(req.params.id)

    res.status(200).json({
      message:'deleted',
    })
  } catch (error) {
    res.send(error)
  }
}
module.exports = {
  getAllBooks,
  getBooksById,
  addBook,
  updateBook,
  deleteBook
}