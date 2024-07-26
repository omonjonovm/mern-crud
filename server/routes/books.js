const {Router} = require('express')
const router = Router()
const {getAllBooks,getBooksById, addBook , updateBook,deleteBook} = require('../controllers/bookControllers')

router.get('/', getAllBooks)
 
router.post('/add',addBook)

router.get('/:id', getBooksById)

router.put('/:id', updateBook)

router.delete('/:id', deleteBook)

module.exports = router